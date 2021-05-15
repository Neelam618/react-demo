import {useState} from 'react'

export default function GetInputValue() {
    const [data, setData] = useState('Type something...');
    const [print, setPrint] = useState(false)
    
    function getData(val) {
        setData(val.target.value)
        setPrint(false)
    }
    return (
        <div>
            <h1>Get Input box Value</h1>
            { print? <h2>{data}</h2> : null }
            <input type="text" onChange={getData}/><button onClick={() => setPrint(true)}>Print data</button>
        </div>
    )
}
