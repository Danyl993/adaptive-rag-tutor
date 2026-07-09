import API from "./api";

export async function getProgress() {

  const res = await API.get("/progress");

  return res.data;

}