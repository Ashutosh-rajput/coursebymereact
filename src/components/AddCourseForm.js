import React, { useState } from 'react';
import { addCourse } from '../api';

const AddCourseForm = () => {
  const [course, setCourse] = useState({
    name: '',
    code: '',
    description: '',
  });

  const handleChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCourse(course);
    setCourse({ name: '', code: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Course title" 
        value={course.title} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        name="code" 
        placeholder="Course code" 
        value={course.code} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        name="description" 
        placeholder="Course description" 
        value={course.description} 
        onChange={handleChange} 
      />
      <button type="submit">Add course</button>
    </form>
  );
};

export default AddCourseForm;
