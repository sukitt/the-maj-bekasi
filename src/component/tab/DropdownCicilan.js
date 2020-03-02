import React from 'react'
import { BaseDropdown } from '../base'


let Data = []
for (let i = 1; i < 13; i++) {
    Data.push({
        id: i,
        name: `${i} Bulan`,
        value: i
    })
}

const DropdownCicilan = (props) => {
    return (
        <BaseDropdown 
            {...props}
            store={Data}
        />
    )
}
export default DropdownCicilan
