import API from "./api";

export async function getTopicLesson(
  subject,
  unit,
  topic
) {
  const res = await API.get(
    "/learn/topic",
    {
      params: {
        subject,
        unit,
        topic,
      },
    }
  );

  return res.data;
}