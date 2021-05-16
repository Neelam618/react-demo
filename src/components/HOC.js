import React from 'react'

export default function ComponentVariant(props) {
    return (
        <div>
            <h2 style={{backgroundColor: "pink", width: 200}}><props.comp /></h2>
        </div>
    )
}


