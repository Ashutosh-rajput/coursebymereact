import React from 'react';
import AddCourseForm from './components/AddCourseForm';
import AddInstanceForm from './components/AddInstanceForm';
import CourseList from './components/CourseList';
import InstanceList from './components/InstanceList';
import './App.css';


function App() {

  return (
    <div className="App">
    <div className="form-container">
      <AddCourseForm />
      <AddInstanceForm />
    </div>
    <div className="table-container">
      <CourseList />
      <InstanceList />
    </div>
  </div>
  );
}

export default App;
