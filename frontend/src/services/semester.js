import API from "./api";

export async function getSemesters() {
  const response = await API.get("/semester/");
  return response.data;
}

export async function createSemester(data) {
  const response = await API.post("/semester/", data);
  return response.data;
}

export async function deleteSemester(semesterName) {

  const response = await API.delete(
    `/semester/${encodeURIComponent(semesterName)}`
  );

  return response.data;

}