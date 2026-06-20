import API from "./api";

export async function getRevisionData() {
  const res = await API.get("/revision");
  return res.data;
}