import React, { Component, createRef } from 'react'

export default class Base extends Component {
    constructor(props) {
        super(props)

        this.select = createRef()
        this._onChange = this._onChange.bind(this)

        const value = props.value || props.defaultValue

        this.state = {
            value
        }
    }

    UNSAFE_componentWillReceiveProps(newProps) {
        const newValue = newProps.value;
        if (newProps.hasOwnProperty('value') && newValue !== this.state.value) {
            this.setState({
                value: newValue
            })
        }
    }

    _onChange = (event) => {
        this.setState({
            value: event.target.value
        })

        const onChange = this.props.onChange;
        if (onChange) onChange(event);
    }
}
