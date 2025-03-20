// server.js - With improved debugging
const express = require("express");
const cors = require("cors");
const { YoutubeTranscript } = require("youtube-transcript");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCv4AjWz_9Nx5RwXWyk6y2PuzHg_GUfPxA");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/transcript", async (req, res) => {
  try {
    console.log("Request body:", req.body);

    
    const videoId = req.body.videoId || "_ANrF3FJm7I"; 
    console.log("Processing video ID:", videoId);

    
    const transcriptData = await YoutubeTranscript.fetchTranscript(videoId);
    console.log(
      "Transcript fetched successfully, length:",
      transcriptData.length
    );

    if (!transcriptData || transcriptData.length === 0) {
      throw new Error("No transcript data available for this video");
    }

    
    const transcriptText = transcriptData.map((item) => item.text).join(" ");

    console.log("Processed transcript length:", transcriptText.length);
    console.log(
      "Transcript preview:",
      transcriptText.substring(0, 200) + "..."
    );

    
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `
Transcript of the YouTube video:
${transcriptText}

Instructions:
Summarize this YouTube video and explain the key concepts with timestamps. It should be detailed and you should outline the topics being covered in the video, structure the response in an clean very comprehensive way
        `.trim();

    console.log("Sending to Gemini API...");
    const result = await model.generateContent(prompt);
    const summary = result.response.text();

    console.log("Gemini summary received, length:", summary.length);
    console.log("Summary preview:", summary.substring(0, 200) + "...");

    
    res.status(200).json({
      summary: summary,
      transcriptLength: transcriptData.length,
      summaryLength: summary.length,
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({
      error: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
});

app.post('/theory-content', async (req, res) => {
    try {
      const videoId = req.body.videoId;
      if (!videoId) return res.status(400).json({ error: 'Missing video ID' });
  
      const transcriptData = await YoutubeTranscript.fetchTranscript(videoId);
      const transcriptText = transcriptData.map(item => item.text).join(' ');
  
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const prompt = `
      YouTube Video Transcript:
      ${transcriptText}
  
      Generate comprehensive learning content in this JSON format:
      {
        "title": "Video title",
        "duration": "HH:MM",
        "sections": [{
          "time": "MM:SS",
          "content": "Section title",
          "theory": {
            "details": "Detailed explanation",
            "badge": "🏆 Achievement name",
            "points": 50,
            "tips": ["Practical tip 1", "Tip 2", "Tip 3"]
          }
        }],
        "keyTopics": ["Key concept 1", "Concept 2"]
      }
  
      Requirements:
      1. Create 4-8 sections with timestamps
      2. Include practical programming tips
      3. Add achievement badges relevant to content
      4. Points should range 10-50 per section
      5. Make technical concepts clear and practical
      `.trim();
  
      const result = await model.generateContent(prompt);
      const content = result.response.text();
      
      res.json({ content: content.replace(/```json/g, '').replace(/```/g, '').trim() });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
app.listen(3000, () => {
  console.log(`Server started at port 3000`);
});
