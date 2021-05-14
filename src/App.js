import UseStatedemo from './components/UseStatedemo'
import NumberIncrement from './components/NumberIncrement'
import Students from './components/Propsdemo'
import GetInputValue from './components/GetInputValue'
import HideShowBtn from './components/HideShowBtn';
import GetFormValues from './components/GetFormValues'

function App() {

  return (
    <div style={{margin: '10em', marginTop: 0}}>
      <NumberIncrement />

      <h1>Props in React</h1>
      <Students name={"preeti"} email={"xyz"} other={{address: 'Delhi', mobile: '000'}} />
      <Students name={"priya"} email={"abc"} other={{address: 'Mumbai', mobile: '111'}} />
      
      <UseStatedemo />
      <GetInputValue />
      <HideShowBtn />
      <GetFormValues />
    </div>
  );
}

export default App;
