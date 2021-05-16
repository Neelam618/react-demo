import React, {useRef} from 'react'

export default function UncontrolledComponent() {
    let inputRef =useRef(null)
    function submitForm (e) {
        e.preventDefault();
        console.log("input field 1 value:", inputRef.current.value)

        let input2 = document.getElementById("input2").value
        console.log("input field 2 value:", input2)
    }
    return (
        <div>
            <h1>Uncontrolled Component</h1>

            <form onSubmit={submitForm}>
                Controlled through useRef: <input type="text" ref={inputRef} /><br /><br />
                Controlled through JS: <input type="text" id="input2"/><br /><br />
                <button>Display values</button>
            </form>
        </div>
    )
}
