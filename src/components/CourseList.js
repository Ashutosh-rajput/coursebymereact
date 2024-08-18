import React, { useEffect, useState } from 'react';
import { getCourses, deleteCourse } from '../api';
import './Dialog.css'; // Import the CSS file

const CourseList = ({ refreshInstances }) => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null); // State for the selected course
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State to handle dialog visibility

  useEffect(() => {
    const fetchCourses = async () => {
      const courses = await getCourses();
      setCourses(courses);
    };
    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteCourse(id);
      setCourses(courses.filter(course => course.courseId !== id));
      refreshInstances();
    } catch (error) {
      if (error.response && error.response.status === 400) {
        alert(error.response.data);  // Display custom error message from the server
      } else {
        console.error("An error occurred while deleting the course:", error);
      }
    }
  };

  const handleView = (course) => {
    setSelectedCourse(course);  // Set the selected course
    setIsDialogOpen(true);  // Open the dialog
  };

  const closeDialog = () => {
    setIsDialogOpen(false);  // Close the dialog
    setSelectedCourse(null);  // Reset the selected course
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.courseId}>
              <td>{course.name}</td>
              <td>{course.code}</td>
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

export default CourseList;
