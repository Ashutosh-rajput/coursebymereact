import React from 'react';
import AddCourseForm from './components/AddCourseForm';
import AddInstanceForm from './components/AddInstanceForm';
import CourseList from './components/CourseList';
import InstanceList from './components/InstanceList';
import './App.css';


function App() {
  const refreshCourses = () => {
    // This function can be used to refresh the course list after adding or deleting courses
  };

  const refreshInstances = () => {
    // This function can be used to refresh the instance list after adding or deleting instances
  };

  return (
    <div className="App">
      <AddCourseForm refreshCourses={refreshCourses} />
      <AddInstanceForm refreshInstances={refreshInstances} />
      <button onClick={refreshCourses}>List courses</button>
      <CourseList refreshInstances={refreshInstances} />
      <InstanceList />
    </div>
  );
}

export default App;
