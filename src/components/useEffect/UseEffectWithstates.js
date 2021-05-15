import React, {useState, useEffect} from 'react'

export default function UseEffectWithstates() {
    const [count, setCount] = useState(10)
    const [data, setData] = useState(100)
    useEffect(() => {
        console.log("useEffect called on count state")
    }, [count])

    useEffect(() => {
         alert("useEffect called on data state")
    }, [data])

    return (
        <div>
            <h1>UseEffect on different states</h1>
            <h2>Count is {count}</h2>
            <h2>Data is {data}</h2>
            <button onClick={() => {setCount(count+1)}}>Update count</button>
            <button onClick={() => {setData(data+1)}}>Update Data</button>
        </div>
    )
}
