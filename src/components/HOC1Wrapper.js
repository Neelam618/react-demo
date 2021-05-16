import React from 'react'

export default function ComponentVariant1(props) {
    return (
        <h2 style={{backgroundColor: "pink", width: 200}}>HOC 1<props.comp /></h2>
    )
}


