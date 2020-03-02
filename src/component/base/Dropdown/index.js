import React, { forwardRef, useState, useImperativeHandle } from 'react'

const index = (props) => {
    const [value, setValue] = useState('')

    // useImperativeHandle(ref, () => ({   
    //     handleChange(e) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
    //         setValue(e.target.value)
    //     },

    //     getValue(e) {
    //         return e.target.value
    //     }
    // }))

    return (
        <select
            value={value}
            {...props}
        >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
            {props.store && props.store.map((d, i) => (
                <option key={i} value={d.value} selected={d.id === 12}>{d.name}</option>
            ))}
        </select>
    )
}

export default index