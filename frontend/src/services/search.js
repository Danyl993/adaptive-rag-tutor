import API from "./api";

export async function getContext(
  query,
  subject,
  unit
) {

  const res = await API.get(
    "/context",
    {
      params: {
        query,
        subject,
        unit
      }
    }
  );

  return res.data;
}