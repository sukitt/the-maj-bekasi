import React from 'react'
import Base from './Base'

export class index extends Base {
    render() {
        const { value } = this.state;
        return (
            <select
                className="form-control"
                value={value}
                {...this.props}
            >                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                {this.props.store && this.props.store.map((d, i) => (
                    <option key={i} value={d} selected={this.props.defaultValue}>{d}</option>
                ))}
            </select>
        )
    }
}

export default index
