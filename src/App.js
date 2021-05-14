import {useState} from 'react'

function App() {
const [data, setData] = useState("hi");

  function updateData(){
    setData("hello");
  } 
  return (
    <>
      <h1>{data}</h1>
      <button onClick={updateData}>Click Me</button>
    </>
  );
}

export default App;
