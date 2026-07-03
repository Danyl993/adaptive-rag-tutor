import API from "./api";

export async function explainSimpler(lesson) {

  const res = await API.post(
    "/learn/explain-simpler",
    {
      lesson
    }
  );

  return res.data;

}