// server.js - With improved debugging
const express = require( 'express');
const cors = require( 'cors');
const { YoutubeTranscript } = require(  'youtube-transcript');
const { GoogleGenerativeAI }  = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyCv4AjWz_9Nx5RwXWyk6y2PuzHg_GUfPxA");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/transcript", async (req, res) => {
    try {
        console.log("Request body:", req.body);
        
        // Get video ID from request body
        const videoId = req.body.videoId || '_ANrF3FJm7I'; // Default video ID if none is provided
        console.log("Processing video ID:", videoId);
        
        // Step 1: Fetch the transcript
        const transcriptData = await YoutubeTranscript.fetchTranscript(videoId);
        console.log("Transcript fetched successfully, length:", transcriptData.length);
        
        if (!transcriptData || transcriptData.length === 0) {
            throw new Error("No transcript data available for this video");
        }
        
        // Step 2: Process transcript data
        const transcriptText = transcriptData
            .map(item => item.text)
            .join(' ');
        
        console.log("Processed transcript length:", transcriptText.length);
        console.log("Transcript preview:", transcriptText.substring(0, 200) + "...");
        
        // Step 3: Send to Gemini API
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `
Transcript of the YouTube video:
${transcriptText}

Instructions:
Summarize this YouTube video and explain the key concepts with timestamps.
        `.trim();

        console.log("Sending to Gemini API...");
        const result = await model.generateContent(prompt);
        const summary = result.response.text();
        
        console.log("Gemini summary received, length:", summary.length);
        console.log("Summary preview:", summary.substring(0, 200) + "...");
        
        // Step 4: Return both transcript and summary
        res.status(200).json({
            summary: summary,
            transcriptLength: transcriptData.length,
            summaryLength: summary.length
        });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
});

// Simple test route
app.get("/test", (req, res) => {
    res.status(200).json({ message: "Server is running correctly" });
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});