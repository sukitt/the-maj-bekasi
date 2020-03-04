import React, { Component, createRef } from 'react'
import NavigationBar from '../component/navbar/Navigationbar'
import HeadSlider from '../component/slider/HeadSlider'
import MoreTentangKami from '../component/card/MoreTentangKami'
import Footer2 from '../component/Footer2'

export default class TentangKami extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sliders: [],
             errors: {
                 sliders: '',
             },
             signup: {
                 validated: false,
                 data: {}
             }
        }
        this.reftitle = createRef()
        this.refname = createRef()
        this.refemail = createRef()
        this._signup = this._signup.bind(this)
    }

    _signup = e => {
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }

        const data = {
            title: this.reftitle.current.value,
            name: this.refname.current.value,
            email: this.refemail.current.value
        }
        e.preventDefault()
        this.setState({
            signup: {
                validate: true,
                data: data
            }
        })
    }
    
    render() {
        console.log(this.state.signup.data)
        return (
            <div>
                <NavigationBar />
                <section>
                    <div className="container">
                        <HeadSlider store={this.state.sliders} errors={this.state.errors.sliders} />
                    </div>
                </section>
                <section>
                    <div className="container">
                        <MoreTentangKami />
                    </div>
                </section>
                <section>
                    <Footer2 
                        validated={this.state.signup.validated}
                        onSubmit={this._signup}
                        titleRef={this.reftitle}
                        nameRef={this.refname}
                        emailRef={this.refemail}
                    />
                </section>
            </div>
        )
    }
}
