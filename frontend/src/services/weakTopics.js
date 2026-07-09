import API from "./api";

export async function getWeakTopics() {
  const res = await API.get("/weak-topics");
  return res.data;
}