import React from 'react'
import {useState} from 'react'

export default function GetFormValues() {
    const [name, setName] = useState("")
    const [tnc, setTnc] = useState(false)
    const [interest, setInterest] = useState("")

    function getFormData(e) {
        console.log(name, interest, tnc)
        e.preventDefault();    //prevents loading on submit button click
    }
    return (
        <div>
            <form onSubmit={getFormData}>
                <input type="text" placeholder="Enter Name" onChange={(e)=> setName(e.target.value)}/> <br /><br />
                <select onChange={(e) => setInterest(e.target.value)}>
                    <option>Select Optoins</option>
                    <option>DC</option>
                    <option>Marvel</option>
                </select>
                <br /><br />
                <input type="checkbox" onChange={(e) => setTnc(e.target.checked)}/><span>Accept Terms and conditions</span><br /><br />
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    )
}
