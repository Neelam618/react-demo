import {useState} from 'react'
import style from './style.module.css'
import UseStatedemo from './components/useState/UseStatedemo'
import NumberIncrement from './components/useState/NumberIncrement'
import Students from './components//useState/Propsdemo'
import GetInputValue from './components/useState/GetInputValue'
import HideShowBtn from './components/useState/HideShowBtn';
import GetFormValues from './components/useState/GetFormValues'
import PassFunctionAsProp from './components/useState/PassFunctionAsProp'
import UseEffectWithstates from './components/useEffect/UseEffectWithstates'
import USeEffetcOnProps from './components/useEffect/USeEffetcOnProps'
import Child from './components/Child'

function App() {
  const [count, setCount] = useState(10)
  const [data, setData] = useState(100)

  function getData() {
    alert("function called from App")
  }

  function parentData(dataFromChild) {
    // alert(dataFromChild);
    alert(dataFromChild.name)
    console.log(dataFromChild)
  }

  return (
    <div className={style.container}>

      <h1>Props in React</h1>
      <Students name={"preeti"} email={"xyz"} other={{address: 'Delhi', mobile: '000'}} />
      <Students name={"priya"} email={"abc"} other={{address: 'Mumbai', mobile: '111'}} />

      <NumberIncrement />
      <UseStatedemo />
      <GetInputValue />
      <HideShowBtn />
      <GetFormValues />
      <PassFunctionAsProp data={getData}/>
      <UseEffectWithstates />
      <USeEffetcOnProps count={count} data={data}/>
      <button onClick={() => {setCount(count+1)}}>Update count</button>
      <button onClick={() => {setData(data+1)}}>Update Data</button>

      <h1>Lifting state up</h1>
      <Child data={parentData}/>
    </div>
  );
}

export default App;
