import {useState} from 'react'

function App() {
const [data, setData] = useState(0);

  function updateData(){
    setData(data+1);
  } 
  return (
    <>
      <h1>{data}</h1>
      <button onClick={updateData}>Click Me</button>
    </>
  );
}

export default App;
