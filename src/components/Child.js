import React from 'react'

export default function Child(props) {
    const dataFromChild = "dataFromChildString"
    return (
        <div>
            <h3>Child component</h3>
            <button onClick={() => props.data(dataFromChild)}>Click me</button>
        </div>
    )
}
