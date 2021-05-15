import React, {useEffect} from 'react'

export default function UseEffectOnProps(props) {
    useEffect(() => {
        console.warn("useEffect called on count prop")
    }, [props.count])

    useEffect(() => {
         console.warn("useEffect called on data prop")
    }, [props.data])

    return (
        <div>
            <h1>UseEffect called on different Props</h1>
            <h2>Count Props {props.count}</h2>
            <h2>Data Props {props.data}</h2>
        </div>
    )
}
