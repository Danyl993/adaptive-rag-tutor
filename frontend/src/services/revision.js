import API from "./api";

export async function getRevisionData(
  subject,
  unit
) {
  const res = await API.get(
    "/revision",
    {
      params: {
        subject,
        unit,
      },
    }
  );

  return res.data;
}