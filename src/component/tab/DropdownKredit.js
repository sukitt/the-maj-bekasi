import React, { Component } from 'react'
import { BaseDropdown } from '../base'


// let Data = []
// for (let i = 1; i < 3; i++) {
//     Data.push({
//         id: i,
//         name: `${i} Tahun`,
//         value: i
//     })
// }

export class DropdownKredit extends Component {
    render() {
        return (
            <BaseDropdown 
                {...this.props}
                store={this.props.value}
            />
        )
    }
}
export default DropdownKredit
