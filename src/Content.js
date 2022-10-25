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
function Content() {

  return <div>
      content
    </div>
  ;
}
export default Content;
