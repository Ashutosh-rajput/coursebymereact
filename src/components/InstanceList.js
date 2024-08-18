import React, { useState } from 'react';
import { getInstancesByYearAndSemester, deleteInstance } from '../api';

const InstanceList = () => {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [instances, setInstances] = useState([]);

  const fetchInstances = async () => {
    const instances = await getInstancesByYearAndSemester(year, semester);
    setInstances(instances);
  };

  const handleDelete = async (instanceId, year, semester) => {
    await deleteInstance(instanceId, year, semester);
    fetchInstances();
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
      <button onClick={fetchInstances}>List instances</button>
      
      <table>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Year-Sem</th>
            <th>Code</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {instances.map((instance) => (
            <tr key={instance.id}>
              <td>{instance.course.title}</td>
              <td>{instance.year}-{instance.semester}</td>
              <td>{instance.course.code}</td>
              <td>
                <button onClick={() => handleDelete(instance.id, instance.year, instance.semester)}>Delete</button>
                <button>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstanceList;
