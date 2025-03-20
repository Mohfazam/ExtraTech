import { useState, useEffect } from "react";
import axios from "axios";

export const Response = () => {
  const [aiResponse, setAiResponse] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(true);
  const [videoId, setVideoId] = useState("_ANrF3FJm7I"); // Default video ID
  const [error, setError] = useState(null);
  const [debugInfo, setDebugInfo] = useState(null);
  
  const fetchSummary = async (id) => {
    try {
      setIsLoading(true);
      setError(null);
      setDebugInfo(null);
      
      console.log("Fetching summary for video ID:", id);
      
      // Send video ID to backend
      const response = await axios.post("http://localhost:3000/transcript", {
        videoId: id
      });
      
      // Log the full response for debugging
      console.log("Full server response:", response.data);
      setDebugInfo(JSON.stringify(response.data, null, 2));
      
      // Get summary from response
      const summary = response.data.summary;
      
      if (!summary) {
        throw new Error("Summary is empty or undefined in the response");
      }
      
      setAiResponse(summary);
    } catch (error) {
      console.error("Error fetching summary:", error);
      setError("Error: " + (error.response?.data?.error || error.message));
      setAiResponse("Failed to generate summary. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch on component mount
  useEffect(() => {
    fetchSummary(videoId);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSummary(videoId);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">YouTube Video Summary</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={videoId}
            onChange={(e) => setVideoId(e.target.value)}
            placeholder="Enter YouTube Video ID"
            className="flex-1 p-2 border rounded"
          />
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={isLoading}
          >
            Get Summary
          </button>
        </div>
      </form>
      
      {isLoading ? (
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mr-3"></div>
          <span>Generating summary...</span>
        </div>
      ) : (
        <div className="prose max-w-none">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 mb-4 rounded">
              {error}
            </div>
          )}
          
          <div className="bg-gray-50 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Summary</h3>
            <div className="whitespace-pre-line">{aiResponse}</div>
          </div>
          
          {debugInfo && (
            <div className="mt-8 border-t pt-4">
              <h4 className="font-medium mb-2">Debug Information:</h4>
              <pre className="bg-gray-100 p-4 rounded text-xs overflow-auto max-h-60">
                {debugInfo}
              </pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
};