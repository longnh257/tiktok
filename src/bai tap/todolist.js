import "./App.css";
import { useState } from "react";
import Content from "./Content";

function App() {
  
  const [job,setJob] = useState()
  const [jobs,setJobs] = useState(() => {
    return JSON.parse( localStorage.getItem("jobs")) ?? []
  })
  const handleSetJobs = () => {
    setJobs(prev => {
      const newJobs = [...prev,job]
      localStorage.setItem('jobs', JSON.stringify(newJobs))
      return newJobs
    })
    console.log(job,jobs);
    setJob("")
  }
  return (
    <div className="App">
      <input 
          type="text"
          value={job}
          onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSetJobs}>Add</button>
      {
        jobs.map(item => {
          return  <h2>{item}</h2>
        })
      }
      
    </div>
  );
}

export default App;
