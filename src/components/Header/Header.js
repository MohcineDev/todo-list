import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {

    return(
        <>
         <h1 className="header" data-testid="header-one">{title}</h1>
         {/* <h3 title='header' className="header">Cats</h3> */}
        </>
    )
}
