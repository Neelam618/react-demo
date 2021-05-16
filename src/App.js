import {useState} from 'react'
import style from './style.module.css'
import UseStatedemo from './components/useState/UseStatedemo'
import NumberIncrement from './components/useState/NumberIncrement'
import Students from './components//useState/Propsdemo'
import GetInputValue from './components/useState/GetInputValue'
import HideShowBtn from './components/useState/HideShowBtn';
import GetFormValues from './components/useState/GetFormValues'
import PassFunctionAsProp from './components/useState/PassFunctionAsProp'
import UseEffectOnstates from './components/useEffect/UseEffectOnstates'
import USeEffectOnProps from './components/useEffect/USeEffectOnProps'
import Child from './components/Child'
import UseMemo from './components/UseMemo'
import UseRef from './components/UseRef'

function App() {

  //useEffect with props
  const [count, setCount] = useState(10)
  const [data, setData] = useState(100)

  // Pass function as Prop
  function getData() {
    alert("function called from App")
  }
  //Lifting state up (from Child.js)
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
      <UseEffectOnstates />

      <USeEffectOnProps count={count} data={data}/>
      <button onClick={() => {setCount(count+1)}}>Update count</button>
      <button onClick={() => {setData(data+1)}}>Update Data</button>

      <h1>Lifting state up</h1>
      <Child data={parentData}/>

      <UseMemo />
      <UseRef />
    </div>
  );
}

export default App;
