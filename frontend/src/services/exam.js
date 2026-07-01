import API from "./api";

export async function getExamData(
  subject,
  units
) {
  const res = await API.get(
    "/exam",
    {
      params: {
        subject,
        units,
      },
    }
  );

  return res.data;
}