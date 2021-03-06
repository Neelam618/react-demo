import React, {useReducer} from 'react'

const reducer = (state, action) => {
    if(action.type === "INCR") {
        state = state + 1;
    }
    if(state > 0 && action.type === "DECR") {
        state = state - 1;
    }
    return state;
}

function UseReducer() {
    const initialData = 10;
    const[state, dispatch] = useReducer(reducer, initialData)
    return (
        <div>
            <h1>useReducer</h1>
            <h2>{state}</h2>
            <button onClick={() => dispatch({type: "INCR"})}>Increment</button>
            <button onClick={() => dispatch({type: "DECR"})}>Decrement</button>
        </div>
    )
}

export default UseReducer
