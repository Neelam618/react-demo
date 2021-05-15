import UseStatedemo from './components/useState/UseStatedemo'
import NumberIncrement from './components/useState/NumberIncrement'
import Students from './components//useState/Propsdemo'
import GetInputValue from './components/useState/GetInputValue'
import HideShowBtn from './components/useState/HideShowBtn';
import GetFormValues from './components/useState/GetFormValues'
import PassFunctionAsProp from './components/useState/PassFunctionAsProp'
import UseEffectDemo from './components/useEffect/UseEffectDemo'

function App() {
  function getData() {
    alert("function called from App")
  }

  return (
    <div style={{margin: '10em', marginTop: 0}}>

      <h1>Props in React</h1>
      <Students name={"preeti"} email={"xyz"} other={{address: 'Delhi', mobile: '000'}} />
      <Students name={"priya"} email={"abc"} other={{address: 'Mumbai', mobile: '111'}} />

      <NumberIncrement />
      <UseStatedemo />
      <GetInputValue />
      <HideShowBtn />
      <GetFormValues />
      <PassFunctionAsProp data={getData}/>
      <UseEffectDemo />
    </div>
  );
}

export default App;
