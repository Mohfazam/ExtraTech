import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import transcriptText from "./utils/transcript.txt?raw"; // Use ?raw to import as string

const genAI = new GoogleGenerativeAI("AIzaSyCv4AjWz_9Nx5RwXWyk6y2PuzHg_GUfPxA");

export const Response = () => {
  const [aiResponse, setAiResponse] = useState("Loading...");

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Imported transcript:", transcriptText);
        if (!transcriptText || transcriptText.trim() === "") {
          setAiResponse("Error: Transcript file is empty or not loaded.");
          return;
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `
Transcript of the YouTube video:
${transcriptText}

Instructions:
Summarize this YouTube video and explain the key concepts with timestamps.
        `.trim();

        console.log("Prompt sent to API:", prompt);
        const result = await model.generateContent(prompt);
        const summary = result.response.text();
        console.log("API response:", summary);
        setAiResponse(summary);
      } catch (error) {
        console.error("Error fetching AI response:", error);
        //@ts-ignore
        setAiResponse("Error: " + error.message);
      }
    };

    fetchData();
  }, []);

  return <div>AI Response: {aiResponse}</div>;
};