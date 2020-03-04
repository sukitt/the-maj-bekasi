import React, { Component, createRef } from 'react'
import NavigationBar from '../component/navbar/Navigationbar'
import SakuraLogo from '../component/assets/partnership-image/sakura.svg'
import Sakura from '../component/card/Sakura'
import Footer2 from '../component/Footer2'

export default class Partnership extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             signup: {
                 validated: true,
                 data: {}
             }
        }
        this.reftile = createRef()
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
            title: this.reftile.current.value,
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
                        <div className="text-center" style={{marginTop: 102}}>
                            <img src={SakuraLogo} alt="sakura-logo" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <Sakura />
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
