import "./App.css";
import { useState } from "react";

  const courses = [
    {
      id:1,
      name: 'CPU A'
    },
    {
      id:2,
      name: 'CPU B'
    },
    {
      id:3,
      name: 'CPU C'
    },
  ]

function App() {
  
  const [checked,setChecked] = useState([])

  const handleChecked = (id) => {
    setChecked(prev => {
      if(checked.includes(id)){
        return prev.filter((item)=>item !== id)
      } else 
      return [...prev,id]
    })
  }

  const handleUpdate =  () => {
    console.log({ids:checked});
  }

  return (
    <div className="App">
      {
        courses.map((course) => (
          <div key={course.id}>
            <input type="checkbox" 
                onChange={() =>handleChecked(course.id)}
            />
            {course.name}
          </div>
        ))
      }
      <button onClick={handleUpdate}>register</button>
    </div>
  );
}

export default App;
