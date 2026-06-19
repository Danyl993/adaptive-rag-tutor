import API from "./api";

export async function getHistory() {
  const res = await API.get("/history");
  return res.data;
}