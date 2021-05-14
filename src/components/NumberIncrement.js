import {useState} from 'react'

export default function NumberIncrement() {
    const [data, setData] = useState(0);

    function updateData(){
        setData(data+1);
    }

    return (
        <div>
            <h1>Increment number in React</h1>
            <h2>{data}</h2>
            <button onClick={updateData}>Click Me</button>
        </div>
    )
}
