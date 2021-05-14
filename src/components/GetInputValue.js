import {useState} from 'react'

export default function GetInputValue() {
    const [data, setData] = useState('Type something...');
    
    function getData(val) {
        setData(val.target.value)
    }
    return (
        <div>
            <input type="text" onChange={getData}/>
            <h2>{data}</h2>
        </div>
    )
}
