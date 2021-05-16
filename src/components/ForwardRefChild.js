import React, {forwardRef} from 'react'

function ForwardRefChild(props, myRef) {
    return (
        <div>
            In Child:<input type="text" ref={myRef} /><br />
        </div>
    )
}

export default forwardRef(ForwardRefChild)
