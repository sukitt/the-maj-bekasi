import { Component } from 'react'
import $ from 'jquery'

export class Base extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            storeUnit: [],
            mobileUnit: {},
            cicilan: 0,
            kredit: 0,
            bunga: 0,
        }

        this._handleSelect = this._handleSelect.bind(this)
    }
    
    componentDidMount() {
        setTimeout(() => {
            document.getElementById("defaultSelect").click()
        }, 2000)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.storeUnit !== prevState.storeUnit) {
            return {
                storeUnit: nextProps.storeUnit
            }
        }
    }

    _handleSelect = (e) => {
        let i, tabContent;
        tabContent = $('.unitContent')
        
        for (i=0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none"
        }
        $(`#${e.currentTarget.value}`).css({"display": "block"})
        
    }
}

export default Base
