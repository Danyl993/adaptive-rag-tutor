import API from "./api";

export async function askQuestion(
  question,
  subject,
  unit
) {
  const res = await API.get(
    "/context",
    {
      params: {
        query: question,
        subject,
        unit,
      },
    }
  );

  return res.data;
}