import API from "./api";

export async function getExamData(
  subject,
  unit
) {
  const res = await API.get(
    "/exam",
    {
      params: {
        subject,
        unit,
      },
    }
  );

  return res.data;
}