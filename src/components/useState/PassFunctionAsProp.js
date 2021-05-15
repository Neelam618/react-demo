import React from 'react'

export default function PassFunctionAsProp(props) {
    return (
        <div>
            <h1>Pass function as prop</h1>
            <button onClick={props.data}>Call Function</button>
        </div>
    )
}
