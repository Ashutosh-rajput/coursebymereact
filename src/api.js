import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const addCourse = async (course) => {
  await axios.post(`${API_URL}/courses`, course);
};

export const getCourses = async () => {
  const response = await axios.get(`${API_URL}/courses`);
  return response.data;
};

export const deleteCourse = async (id) => {
  await axios.delete(`${API_URL}/courses/${id}`);
};

export const addInstance = async (instance) => {
  await axios.post(`${API_URL}/instances`, instance);
};

export const getCoursesByYearAndSemester = async (year, semester) => {
  const response = await axios.get(`${API_URL}/instances/${year}/${semester}`);
  return response.data; // Expecting a list of courses delivered in the given year and semester
};

export const deleteInstance = async (year, semester,instanceId) => {
  await axios.delete(`${API_URL}/instances/${year}/${semester}/${instanceId}`);
};
