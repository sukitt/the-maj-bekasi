import React, { Component, createRef } from 'react'
import NavigationBar from '../component/navbar/Navigationbar'
import HeadSlider from '../component/slider/HeadSlider'
import MoreTentangKami from '../component/card/MoreTentangKami'
import OwnerSay from '../component/card/OwnerSay'
import Footer from '../component/footer/Footer'

import MobileNavigationBar from '../component/navbar/mobile/Navigationbar'
import MobileHeaderSlider from '../component/slider/mobile/HeadSlider'
import MobileMoreTentangKami from '../component/card/mobile/MoreTentangKami'
import MobileOwnerSay from '../component/card/mobile/OwnerSay'
import MobileFooter from '../component/footer/mobile/Footer'


import { layoutGenerator } from 'react-break'
import { getSliders, getUnits, getGallery, getNavbar } from '../services/get'

const layout = layoutGenerator({
    mobile: 0,
    tablet: 768,
    desktop: 992,
  });
  
const OnMobileAndTablet = layout.isAtMost('tablet');
const OnDesktop = layout.is('desktop');


export default class TentangKami extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             navigation: [],
             sliders: [],
             gallery: [],
             units: [],          
             errors: {
                 navigation: {},
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
        getNavbar()
          .then(res => this.setState({navigation: res.data}))
          .catch((err) => {
            if (err && err.response) this.setState({errors:{navigation:{code:err.response.status, status:err.response.statusText}}})
          })
        
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
                <OnDesktop>
                    <NavigationBar />
                </OnDesktop>

                <OnMobileAndTablet>
                    <MobileNavigationBar store={this.state.navigation} errors={this.state.errors.sliders} />
                </OnMobileAndTablet>

                <section>
                    <OnDesktop>
                        <div className="container">
                            <HeadSlider store={this.state.sliders} errors={this.state.errors.sliders} />
                        </div>
                    </OnDesktop>

                    <OnMobileAndTablet>
                        <MobileHeaderSlider store={this.state.sliders} errors={this.state.errors.sliders}  />
                    </OnMobileAndTablet>
                </section>

                <section>
                    <OnDesktop>
                        <div className="container">
                            <MoreTentangKami />
                        </div>
                    </OnDesktop>

                    <OnMobileAndTablet>
                        <div className="container">
                            <MobileMoreTentangKami />
                        </div>
                    </OnMobileAndTablet>
                </section>

                <section>
                    <OnDesktop>
                        <div className="w-100">
                            <OwnerSay />
                        </div>
                    </OnDesktop>

                    <OnMobileAndTablet>
                        <div>
                            <MobileOwnerSay />
                        </div>
                    </OnMobileAndTablet>
                </section>

                <section>
                    <OnDesktop>
                        <Footer
                            validated={this.state.footer.validated}
                            onSubmit={this._footer}
                            titleRef={this.footreftitle}
                            nameRef={this.footrefname}
                            emailRef={this.footrefemail}
                        />
                    </OnDesktop>
                    <OnMobileAndTablet>
                        <MobileFooter 
                            validated={this.state.footer.validated}
                            onSubmit={this._footer}
                            titleRef={this.footreftitle}
                            nameRef={this.footrefname}
                            emailRef={this.footrefemail}
                        />
                    </OnMobileAndTablet>
                </section>
            </div>
        )
    }
}
