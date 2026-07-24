import axios from "axios";

export async function getFiles(subject, unit) {
  const response = await axios.get(
    "http://127.0.0.1:8000/files",
    {
      params: {
        subject,
        unit,
      },
    }
  );

  return response.data;
}