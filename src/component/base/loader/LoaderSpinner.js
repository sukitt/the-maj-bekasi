import React from 'react'
import './style.scss'
import logo from '../../../assets/logo.svg'

const LoaderSpinner = props => {
    return (
        <div className="w-100 vh-100 suspense">
            <div className="suspense-backgrounds" >
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default LoaderSpinner
