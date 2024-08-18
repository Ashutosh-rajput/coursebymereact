import React, { useEffect, useState } from 'react';
import { getCourses, deleteCourse } from '../api';

const CourseList = ({ refreshInstances }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await getCourses();
      setCourses(courses);
    };
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    await deleteCourse(id);
    setCourses(courses.filter(course => course.id !== id));
    refreshInstances();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Course Title</th>
          <th>Code</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td>{course.title}</td>
            <td>{course.code}</td>
            <td>
              <button onClick={() => handleDelete(course.id)}>Delete</button>
              <button>View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseList;
