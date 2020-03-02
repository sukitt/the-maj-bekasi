import React from 'react'
import { BaseDropdown } from '../base'


let Data = []
for (let i = 1; i < 3; i++) {
    Data.push({
        id: i,
        name: `${i} Tahun`,
        value: i
    })
}

const DropdownKredit = (props) => {
    return (
        <BaseDropdown 
            {...props}
            store={Data}
        />
    )
}
export default DropdownKredit
