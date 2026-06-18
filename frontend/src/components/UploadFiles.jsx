export default function UploadedFiles() {
  const files = [
    "os.pdf",
    "cn_notes.pdf",
    "dbms_unit1.pdf",
  ];

  return (
    <div className="border border-gray-800 rounded p-4">
      <h2 className="font-bold mb-2">
        Uploaded Files
      </h2>

      {files.map((file) => (
        <p key={file}>{file}</p>
      ))}
    </div>
  );
}