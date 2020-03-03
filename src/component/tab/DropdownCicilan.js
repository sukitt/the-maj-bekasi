import React, { Component } from 'react'
import { BaseDropdown } from '../base'


let Data = []
for (let i = 1; i <= 12; i++) {
    Data.push({
        id: i,
        name: `${i} Bulan`,
        value: i
    })
}

class DropdownCicilan extends Component {
    render() {
        return (
            <BaseDropdown 
                {...this.props}
                store={Data}
            />
        )
    }
}
export default DropdownCicilan
