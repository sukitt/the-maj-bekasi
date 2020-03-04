import React, { Component, createRef } from 'react'
import NavigationBar from '../component/navbar/Navigationbar'
import HeadSlider from '../component/slider/HeadSlider'
import MoreTentangKami from '../component/card/MoreTentangKami'
import Footer from '../component/Footer'
import { getSliders, getUnits, getGallery } from '../services/get'

export default class TentangKami extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             sliders: [],
             gallery: [],
             units: [],          
             errors: {
                 sliders:{},
                 gallery:{}
             },
             signup: {
                 validated: false,
                 data: {}
             },
             footer: {
                validated: true,
                data: {}
              }
        }
        this.reftitle = createRef()
        this.refname = createRef()
        this.refemail = createRef()
        this._signup = this._signup.bind(this)
    }

    componentDidMount() {
        getSliders()
            .then((res) => this.setState({sliders: res.data}))
            .catch((err) => {
                if (err && err.response) this.setState({errors: {sliders: {code: err.response.status, status: err.response.statusText}}})
            })
    
        getUnits()
            .then(res => this.setState({units: res.data}))
            .catch(err => {if (err) throw err})
    
        getGallery()
            .then(res => this.setState({gallery: res.data}))
            .catch((err) => {
                if (err && err.response) this.setState({errors:{gallery:{code:err.response.status, status:err.response.statusText}}})
            })
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
                    <Footer
                        validated={this.state.footer.validated}
                        onSubmit={this._footer}
                        titleRef={this.footreftitle}
                        nameRef={this.footrefname}
                        emailRef={this.footrefemail}
                    />
                </section>
            </div>
        )
    }
}
