import API from "./api";

export async function searchQuestion(question) {
  const res = await API.get("/search", {
    params: {
      query: question,
    },
  });

  return res.data;
}