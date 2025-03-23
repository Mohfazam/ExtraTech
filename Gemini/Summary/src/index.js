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

app.post("/theory-content", async (req, res) => {
  try {
    const videoId = req.body.videoId;
    if (!videoId) return res.status(400).json({ error: "Missing video ID" });

    const transcriptData = await YoutubeTranscript.fetchTranscript(videoId);
    const transcriptText = transcriptData.map((item) => item.text).join(" ");

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
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

    res.json({
      content: content
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim(),
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/coding-challenge', async (req, res) => {
    try {
      const { videoId } = req.body;
      if (!videoId) return res.status(400).json({ error: 'Missing video ID' });
  
      const transcriptData = await YoutubeTranscript.fetchTranscript(videoId);
      const transcriptText = transcriptData.map(item => item.text).join(' ');
  
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      const prompt = `
      Generate JSON with 12 coding challenges (3 per difficulty: Easy, Medium, Hard, CP)
      and 3 quizzes. Follow this exact format:
      
      {
        "codingChallenges": [
          {
            "difficulty": "Easy",
            "title": "Challenge 1 (1-Star)",
            "stars": 1,
            "problemStatement": "...",
            "starterCode": { "javascript": "...", "python": "...", "cpp": "..." },
            "testCases": [{"input": [], "output": ..., "hidden": false}],
            "solution": { "javascript": "...", "python": "...", "cpp": "..." }
          },
          // More challenges...
        ],
        "quizzes": [
          {
            "question": "...",
            "options": ["...", "...", "...", "..."],
            "correctIndex": 0,
            "explanation": "..."
          }
          // More quizzes...
        ]
      }
      `.trim();
  
      const result = await model.generateContent(prompt);
      const content = result.response.text();
      const cleaned = content.replace(/```json/g, '').replace(/```/g, '').trim();
      
      // Validate before parsing
      if (!cleaned) throw new Error('Empty response from AI');
      
      const data = JSON.parse(cleaned);
  
      // Validate structure
      if (!data.codingChallenges || !data.quizzes) {
        throw new Error('Invalid response format from AI');
      }
  
      if (data.quizzes.length < 3) {
        throw new Error('At least 3 quizzes required');
      }
  
      res.json(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        error: error instanceof Error ? error.message : 'Failed to generate content'
      });
    }
  });

app.post('/generate-problem', async (req, res) => {
    try {
      const { videoId } = req.body;
      if (!videoId) return res.status(400).json({ error: 'Missing video ID' });
  
      // Replace fetchTranscript with direct YouTubeTranscript call
      const transcriptData = await YoutubeTranscript.fetchTranscript(videoId);
      const transcript = transcriptData.map(item => item.text).join(' ');
  
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
      // Keep the rest of the code exactly the same
      const prompt = `
      Generate a coding problem based on this video content:
      ${transcript}
      
      Requirements:
      1. Medium difficulty level
      2. Clear problem statement with example
      3. Starter code for JavaScript, Python
      4. 3 test cases (2 visible, 1 hidden)
      5. Focus on presentable structure
      6. Include hints and learning resources
      
      Format response as JSON:
      {
        "problem": {
          "title": "Array Transformation",
          "description": "Transform the array according to specific rules...",
          "difficulty": "Medium",
          "example": {
            "input": "[1, 2, 2, 3]",
            "output": "[1, 2, 3]",
            "explanation": "Remove duplicates and sort..."
          },
          "starterCode": {
            "javascript": "function transformArray(arr) {...}",
            "python": "def transform_array(arr): ..."
          },
          "testCases": [
            {"input": "[5,4,3,3]", "output": "[3,4,5]", "hidden": false},
            {"input": "[7,1,7,2]", "output": "[1,2,7]", "hidden: false},
            {"input": "[9,9,9]", "output": "[9]", "hidden": true}
          ],
          "hints": [
            "Consider using built-in data structures",
            "Think about time complexity optimization"
          ],
          "learningResources": [
            {
              "title": "Array Methods Guide",
              "url": "https://example.com/array-methods"
            }
          ],
          "tags": ["arrays", "sorting", "optimization"]
        }
      }`;
  
      const response = await model.generateContent(prompt);
      const content = response.response.text();
      const cleaned = content.replace(/```json/g, '').replace(/```/g, '').trim();
      
      // Basic validation
      if (!cleaned) throw new Error('Empty response from AI');
      const data = JSON.parse(cleaned);
      
      if (!data.problem || !data.problem.title || !data.problem.description) {
        throw new Error('Invalid problem structure');
      }
  
      res.json(data.problem);
  
    } catch (error) {
      console.error('Problem Generation Error:', error);
      res.status(500).json({
        error: error.message,
        details: 'Problem generation failed. Try refreshing or another video.'
      });
    }
  });

  app.post('/generate-quiz', async (req, res) => {
    try {
      const { videoId } = req.body;
      if (!videoId) return res.status(400).json({ error: 'Missing video ID' });
  
      const transcriptData = await YoutubeTranscript.fetchTranscript(videoId);
      const transcriptText = transcriptData.map(item => item.text).join(' ');
      
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
      
      const prompt = `
      Generate a comprehensive quiz based on this video content:
      ${transcriptText}
      
      Requirements:
      1. Create 30 questions (10 easy, 10 medium, 10 hard)
      2. Each question must have:
         - 4 options
         - Correct answer index (0-3)
         - Detailed explanation
      3. Follow this exact JSON format:
      {
        "easy": [
          {
            "question": "What is the index of the first element in an array?",
            "options": ["0", "1", "-1", "Depends on the array"],
            "correct": 0,
            "explanation": "In most programming languages, array indices start at 0."
          }
        ],
        "medium": [...],
        "hard": [...]
      }
      
      4. Questions should cover:
         - Fundamental concepts
         - Practical applications
         - Edge cases
         - Performance considerations
      5. Avoid duplicate questions
      6. Ensure progressive difficulty levels
      `;
  
      const result = await model.generateContent(prompt);
      const content = result.response.text();
      
      // Clean and validate response
      const cleaned = content.replace(/```json/g, '').replace(/```/g, '').trim();
      if (!cleaned) throw new Error('Empty response from AI');
      
      const data = JSON.parse(cleaned);
      
      // Validate structure
      const validateQuizData = (quizData) => {
        const difficulties = ['easy', 'medium', 'hard'];
        for (const diff of difficulties) {
          if (!quizData[diff] || !Array.isArray(quizData[diff])) {
            throw new Error(`Missing ${diff} questions`);
          }
          quizData[diff].forEach(q => {
            if (!q.question || !q.options || q.options.length !== 4 || 
                typeof q.correct !== 'number' || !q.explanation) {
              throw new Error(`Invalid question format in ${diff}`);
            }
          });
        }
      };
      
      validateQuizData(data);
      
      res.json(data);
  
    } catch (error) {
      console.error('Quiz Generation Error:', error);
      res.status(500).json({
        error: error.message,
        details: 'Failed to generate quiz. Try a different video or check transcript availability.'
      });
    }
  });

app.listen(3000, () => {
  console.log(`Server started at port 3000`);
});
