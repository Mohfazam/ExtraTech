import { useRef, useState } from "react";
import "./App.css";
import { Response } from "./Response";

function App() {
  const urlRef = useRef();
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = () => {
    setVideoUrl(urlRef.current.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="border border-black h-[400px] w-screen break-words m-20 p-4">
        <p className="text-wrap">Response:</p>
        <input
          type="text"
          ref={urlRef}
          placeholder="Enter YouTube URL"
          className="border p-2 m-2"
        />
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
        {videoUrl && <Response videoUrl={videoUrl} />}
      </div>
    </div>
  );
}

export default App;
