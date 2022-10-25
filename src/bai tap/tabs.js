import "./App.css";
import { useEffect, useState } from "react";

//TH1 useEffect(callback)
// gọi lại callback khi component render
//TH2 useEffect(callback,[])
// chỉ gọi lại callback 1 lần sau khi component mount
//TH3 useEffect(callback,[dependencies])
// đc gọi lại mỗi khi dependencies được thay đổi
//------------
/* 1 trong cả 2 trường hợp callback luôn 
  được gọi sau khi component mounted */

/* https://jsonplaceholder.typicode.com/posts */

const tabs = ["posts", "comments", "albums"];

function App() {
  const [type, setType] = useState("albums");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  return (
    <div className="App">
      {tabs.map((tab) => (
        <button 
            key={tab}
            style={tab===type ? {color:"red",backgroundColor:"#333"} : {}}
            onClick={()=>setType(tab)}
        >{tab}</button>
      ))}
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
