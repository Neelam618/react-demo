import {useState} from 'react'
import UseStatedemo from './components/UseStatedemo'
import Students from './components/Propsdemo'
import GetInputValue from './components/GetInputValue'
import HideShowBtn from './components/HideShowBtn';
import GetFormValues from './components/GetFormValues'

function App() {
const [data, setData] = useState(0);

  function updateData(){
    setData(data+1);
  } 
  return (
    <div style={{margin: '10em', marginTop: 0}}>
      <h1>UseState in React</h1>
      <h2>{data}</h2>
      <button onClick={updateData}>Click Me</button>

      <h1>Props in React</h1>
      <Students name={"preeti"} email={"xyz"} other={{address: 'Delhi', mobile: '000'}} />
      <Students name={"priya"} email={"abc"} other={{address: 'Mumbai', mobile: '111'}} />

      <h1>UseState demo</h1>
      <UseStatedemo />
      <h1>Get Input box Value</h1>
      <GetInputValue />
      <h1>Hide/Show Content</h1>
      <HideShowBtn />
      <h1>Get Form Values</h1>
      <GetFormValues />
    </div>
  );
}

export default App;
