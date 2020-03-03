import React, { Component } from 'react'
import { BaseDropdown } from '../base'

let Data = []
for (let i=5; i <= 20; i+=5) {
    Data.push({
        name: `${i} %`,
        value: i
    })
}

export default class DropdownBunga extends Component {
    render() {
        return (
            <BaseDropdown
                {...this.props}
                store={Data}
            />
        )
    }
}
