from youtube_transcript_api import YouTubeTranscriptApi
import os

# Use the directory of the script as the output location
current_dir = os.path.dirname(os.path.abspath(__file__))
video_id = "76dhtgZt38A"

try:
    transcript = YouTubeTranscriptApi.get_transcript(video_id)
    # Combine text with timestamps
    transcript_text = "\n".join([f"{entry['start']} - {entry['text']}" for entry in transcript])
    print(transcript_text)
    # Save to file in the current folder
    output_path = os.path.join(current_dir, "transcript.txt")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(transcript_text)
    print(f"Transcript saved to: {output_path}")
except Exception as e:
    error_message = f"Error: {e}"
    print(error_message)
    # Save error to file in the current folder
    output_path = os.path.join(current_dir, "transcript.txt")
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(error_message)
    print(f"Error saved to: {output_path}")