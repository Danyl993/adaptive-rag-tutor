"use client";

import { useState } from "react";
import { Upload } from "lucide-react";
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
        "Upload failed. Please check that the backend is running."
      );

    } finally {

      setUploading(false);

    }

  }

  return (

    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg">

      <div className="flex items-center gap-3 mb-5">

        <Upload className="text-emerald-500" size={24} />

        <h2 className="text-xl font-semibold">
          Upload Study Material
        </h2>

      </div>

      <label className="block">
      <input
        type="file"
        onChange={handleFileChange}
        disabled={uploading}
        className="hidden"
      />

      <span className="flex cursor-pointer justify-center rounded-xl bg-slate-700 px-5 py-3 font-medium text-white transition hover:bg-slate-600">
        Choose File
      </span>
    </label>

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="mt-4 w-full rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-500 disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload PDF"}
      </button>

      {file && (

        <p className="mt-4 text-slate-300">
          📄 {file.name}
        </p>

      )}

      {status && (

        <p
          className={`mt-3 text-sm ${
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