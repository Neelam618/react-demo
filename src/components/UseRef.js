import React, {useRef} from 'react'

export default function UseRef() {
    let inputRef =useRef(null)
    function handleInput() {
        inputRef.current.value ="1000"
        inputRef.current.focus()
        inputRef.current.style.background ="pink"

    }
    return (
        <div>
            <h1>useRef hook</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={handleInput}>handle input</button>
        </div>
    )
}
