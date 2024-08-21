import React, { useState, useEffect } from 'react';
import { getCourses, addInstance } from '../api';

const AddInstanceForm = () => {
  const [instance, setInstance] = useState({
    courseId: '',
    year: '',
    semester: '',
  });

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await getCourses();
      setCourses(courses);
    };
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    setInstance({ ...instance, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addInstance(instance);
    setInstance({ courseId: '', year: '', semester: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <select name="courseId" value={instance.courseId} onChange={handleChange}>
        <option value="">Select course</option>
        {courses.map((course) => (
          <option key={course.courseId} value={course.courseId}>{course.name}</option>
        ))}
      </select>
      <input 
        type="number" 
        name="year" 
        placeholder="Year" 
        value={instance.year} 
        onChange={handleChange} 
      />
      <input 
        type="number" 
        name="semester" 
        placeholder="Semester" 
        value={instance.semester} 
        onChange={handleChange} 
      />
      <button type="submit">Add instance</button>
    </form>
  );
};

export default AddInstanceForm;
