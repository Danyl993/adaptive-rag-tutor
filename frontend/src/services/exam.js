import API from "./api";

export async function getExamData(
  subject,
  unit,
  examType = "revision"
) {
  const res = await API.get(
    "/exam",
    {
      params: {
        subject,
        unit,
        exam_type: examType,
      },
    }
  );

  return res.data;
}