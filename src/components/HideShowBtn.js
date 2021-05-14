import React from 'react'
import {useState} from 'react'

export default function HideShowBtn() {
    const [status, setStatus] = useState(true)
    return (
        <div>
            { status ? <h1>Hide/Show Content</h1> : null }
            <button onClick={() => setStatus(false)}>Hide</button>
            <button onClick={() => setStatus(true)}>Show</button>            
        </div>
    )
}
