import API from "./api";

export async function getLearnData() {
  const res = await API.get("/learn");
  return res.data;
}