import API from "./api";

export async function getMCQs(
  subject,
  unit
) {
  const res = await API.get(
    "/mcq",
    {
      params: {
        subject,
        unit,
      },
    }
  );

  return res.data;
}