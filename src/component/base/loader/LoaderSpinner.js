import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoaderSpinner = props => {
    return (
        <div style={{display: "flex", justifyContent: "center", height: "100vh", alignItems: "center"}}>
            <Spinner animation="border" style={{color: "#CC9980"}} />
            <code style={{marginLeft: "10px", color: "#CC9980"}}>Loading...</code>
        </div>
    )
}

export default LoaderSpinner
