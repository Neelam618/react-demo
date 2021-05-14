import {useState} from 'react'
import Students from './components/Students'

function App() {
const [data, setData] = useState(0);

  function updateData(){
    setData(data+1);
  } 
  return (
    <>
      <h1>{data}</h1>
      <button onClick={updateData}>Click Me</button>

      <h2>Props in React</h2>
      <Students name={"preeti"} email={"xyz"} other={{address: 'Delhi', mobile: '000'}} />
      <Students name={"priya"} email={"abc"} other={{address: 'Mumbai', mobile: '111'}} />
    </>
  );
}

export default App;
