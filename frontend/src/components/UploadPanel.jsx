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
    setStatus("");

    if (selectedFile) {
      setStatus("File selected successfully.");
    }
  }

  async function handleUpload() {
    if (!file) {
      setStatus("Please select a file before uploading.");
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();

      formData.append("subject", subject);
      formData.append("unit", unit);
      formData.append("file", file);

      await uploadFile(formData);

      setStatus("File uploaded successfully.");

      setFile(null);

    } catch (err) {
      console.error(err);

      setStatus(
        "Upload failed. Please check that the backend is running and the file type is supported."
      );

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
        disabled={uploading}
      />

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>

      {file && (
        <p className="mt-2">
          Selected: {file.name}
        </p>
      )}

      {status && (
        <p
          className={`mt-2 ${
            status.toLowerCase().includes("failed")
              ? "text-red-400"
              : "text-green-400"
          }`}
        >
          {status}
        </p>
      )}

    </div>
  );
}