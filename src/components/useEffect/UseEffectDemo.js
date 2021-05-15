import React, {useState, useEffect} from 'react'

export default function UseEffectDemo() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("useEffect called for demo")
    })
    return (
        <div>
            <h1>useEffect in React {count}</h1>
            <button onClick={()=> setCount(count+1)}>Update counter</button>
        </div>
    )
}
