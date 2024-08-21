import React, { useState } from 'react';
import { getCoursesByYearAndSemester, deleteInstance } from '../api';
import './Dialog.css'; 

const CourseListByYearAndSemester = () => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null); 
  const [isDialogOpen, setIsDialogOpen] = useState(false); 

  // Fetch courses delivered in a particular year and semester
  const fetchCourses = async () => {
    try {
      const courses = await getCoursesByYearAndSemester(year, semester);
      setCourses(courses);
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  };

  // Handle the deletion of a course delivery
  const handleDelete = async (courseId) => {
    try {
      await deleteInstance(year, semester, courseId); 
      fetchCourses(); 
    } catch (error) {
      console.error("Failed to delete course:", error);
    }
  };

  const handleView = (course) => {
    setSelectedCourse(course); 
    setIsDialogOpen(true); 
  };

  const closeDialog = () => {
    setIsDialogOpen(false); 
    setSelectedCourse(null); 
  };

  return (
    <div>
      <input 
        type="number" 
        placeholder="Year" 
        value={year} 
        onChange={(e) => setYear(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Semester" 
        value={semester} 
        onChange={(e) => setSemester(e.target.value)} 
      />
      <button onClick={fetchCourses}>List Courses</button>
      
      <table>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Code</th>
            <th>Year-Sem.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.courseId}>
              <td>{course.name}</td>
              <td>{course.code}</td>
              <td>{year}-{semester}</td>
              <td>
                <button onClick={() => handleDelete(course.courseId)}>Delete</button>
                <button onClick={() => handleView(course)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isDialogOpen && selectedCourse && (
        <div className="dialog-overlay" onClick={closeDialog}>
          <div className="dialog" onClick={(e) => e.stopPropagation()}>
            <button className="dialog-close-button" onClick={closeDialog}>&times;</button>
            <div className="dialog-content">
              <h2>{selectedCourse.name}</h2>
              <p><strong>Code:</strong> {selectedCourse.code}</p>
              <p><strong>Description:</strong> {selectedCourse.description}</p>
              <button onClick={closeDialog}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseListByYearAndSemester;
