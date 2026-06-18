"use client";

import { useState } from "react";

export default function UploadPanel() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];

    setFile(selectedFile);

    if (selectedFile) {
      setStatus("File selected successfully");
    }
  }

  return (
    <div className="border border-gray-800 rounded p-4">
      <h2 className="font-bold mb-2">
        Upload Study Material
      </h2>

      <input
        type="file"
        onChange={handleFileChange}
      />

      {file && (
        <p className="mt-2">
          Selected: {file.name}
        </p>
      )}

      {status && (
        <p className="mt-2 text-green-400">
          {status}
        </p>
      )}
    </div>
  );
}