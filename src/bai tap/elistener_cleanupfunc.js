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

/* 2 cleanup function sẽ được gọi trước khi component unmounted */

/* https://jsonplaceholder.typicode.com/posts */

const tabs = ["posts", "comments", "albums"];

function App() {
  const [type, setType] = useState("albums");
  const [posts, setPosts] = useState([]);
  const [resize, setResize] = useState(window.innerWidth);
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >=400)
    }
    window.addEventListener('scroll', handleScroll)

    //clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setResize(window.innerWidth)
    }
    window.addEventListener('resize', handleScroll)

    //clean up function
    return () => {
      window.removeEventListener('resize', handleScroll)
    }
  }, []);


  return (
    <div className="App">
      <h1>width: {resize}</h1>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={tab === type ? { color: "red", backgroundColor: "#333" } : {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      {showGoToTop && (
        <button style={{ position: "fixed", right: "20px", bottom: "20px" }}>
          Go to top
        </button>
      )} 
    </div>
  );
}

export default App;
