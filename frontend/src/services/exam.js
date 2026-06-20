import API from "./api";

export async function getExamData() {
  const res = await API.get("/exam");
  return res.data;
}