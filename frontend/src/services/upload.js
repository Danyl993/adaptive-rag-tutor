import API from "./api";

export async function uploadFile(formData) {
  const res = await API.post(
    "/upload",
    formData
  );

  return res.data;
}