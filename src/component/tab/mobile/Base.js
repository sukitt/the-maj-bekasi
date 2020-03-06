import React, { Component } from 'react'

export class Base extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             cicilan: 0,
             kredit: 0,
             bunga: 0,
        }
    }
    
}

export default Base
