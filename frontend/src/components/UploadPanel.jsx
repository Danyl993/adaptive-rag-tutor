"use client";

import { useState } from "react";
import { uploadFile } from "@/services/upload";

export default function UploadPanel({
    subject,
    unit,
  }) {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [uploading, setUploading] = useState(false);

  function handleFileChange(e) {

    const selectedFile = e.target.files[0];

    setFile(selectedFile);

    if (selectedFile) {
      setStatus("File selected successfully");
    }
  }

  async function handleUpload() {

    if (!file) {
      setStatus("Please select a file first");
      return;
    }

    try {

      setUploading(true);

      const formData = new FormData();

      formData.append("subject", subject);
      formData.append("unit", unit);
      formData.append("file", file);

      await uploadFile(formData);

      setStatus("Upload successful");

    } catch (err) {

      console.error(err);
      setStatus("Upload failed");

    } finally {

      setUploading(false);

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

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

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