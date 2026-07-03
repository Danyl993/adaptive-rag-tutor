import API from "./api";

export async function explainBetter(lesson) {

  const res = await API.post(
    "/learn/explain-better",
    {
      lesson
    }
  );

  return res.data;

}