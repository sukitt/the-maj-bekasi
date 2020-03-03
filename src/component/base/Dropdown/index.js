import React from 'react'
import Base from './Base'

export class index extends Base {
    render() {
        const { value } = this.state;
        return (
            <select
                value={value}
                {...this.props}
            >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                {this.props.store && this.props.store.map((d, i) => (
                    <option key={i} value={d.value} selected={this.props.defaultValue}>{d.name}</option>
                ))}
            </select>
        )
    }
}

export default index
