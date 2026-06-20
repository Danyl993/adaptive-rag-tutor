import API from "./api";

export async function getTopics(subject, unit) {
  const res = await API.get("/topics", {
    params: {
      subject,
      unit,
    },
  });

  return res.data;
}