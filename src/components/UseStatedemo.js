import {useState} from 'react'

function UseStatedemo() {
const [name, setName] = useState("Neelam");
  return (
    <>
      <h2>{name}</h2>
      <button onClick={() => {setName("Sidhhu")}}>Update Name</button>
    </>
  );
}

export default UseStatedemo;
