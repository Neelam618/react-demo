import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const multiplyCountMemo = useMemo(function multiplyCount() {
        console.warn("multiplyCount function called")
        return count * 10
    }, [count])

    return (
        <div>
            <h1>useMemo hook</h1>
            <h2>Item: {item}</h2>
            <h2>Count: {count}</h2>
            <h2>Multiply count: {multiplyCountMemo}</h2>

            <button onClick={() => setCount(count + 1)}>Update Count</button>
            <button onClick={() => setItem(item * 2)}>Update Item</button>
        </div>
    )
}
