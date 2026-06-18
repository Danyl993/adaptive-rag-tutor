"use client";

import { useState } from "react";

export default function UploadPanel() {
  const [file, setFile] = useState(null);

  return (
    <div className="border border-gray-800 rounded p-4">
      <h2 className="font-bold mb-2">
        Upload Study Material
      </h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      {file && (
        <p className="mt-2">
          Selected: {file.name}
        </p>
      )}
    </div>
  );
}