import {useState} from 'react'

export default function ControlledComponent() {
    const [val, setVal] =useState("hi")
    return (
        <div>
            <h1>Controlled Component</h1>
            Input controlled through useState: <input type="text" value={val} onChange={(e)=> setVal(e.target.value)}/>
        </div>
    )
}
