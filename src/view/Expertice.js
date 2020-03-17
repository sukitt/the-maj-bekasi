import React, { Component, createRef } from 'react'
import Whatsapp from '../component/base/whatsapp';

import { layoutGenerator } from 'react-break';
import NavigationBar from '../component/navbar/Navigationbar';
import Footer from '../component/footer/Footer'

import MobileNavigationBar from '../component/navbar/mobile/Navigationbar'
import MobileFooter from '../component/footer/mobile/Footer'

import Leopalace from '../component/base/expertice';

import { getNavbar, getSliders, getUnits, getGallery, getPartnership, getLocation, getAbouts, getBlogs } from '../services/get'

const layout = layoutGenerator({
    mobile: 0,
    tablet: 768,
    desktop: 992,
});

const OnMobileAndTablet = layout.isAtMost('tablet');
const OnDesktop = layout.is('desktop');

export default class Expertice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navigation: [],
            errors: {
                navigation: {},
            },
            footer: {
                validated: true,
                data: {}
            }
        }
        this._footer = this._footer.bind(this)
        this.footreftitle = createRef()
        this.footrefname = createRef()
        this.footrefemail = createRef()
    }

    componentDidMount() {
        getNavbar()
            .then(res => this.setState({ navigation: res.data }))
            .catch((err) => {
                if (err && err.response) this.setState({ errors: { navigation: { code: err.response.status, status: err.response.statusText } } })
            })
    }

    _footer = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            this.setState({ footer: { validated: false } });
            e.preventDefault();
            e.stopPropagation();
        }

        const data = {
            title: this.footreftitle.current.value,
            name: this.footrefname.current.value,
            email: this.footrefemail.current.value
        }
        this.setState({
            footer: {
                data: data
            }
        })
        e.preventDefault()
    }

    render() {
        return (
            <>
                <Whatsapp />
                <OnDesktop>
                    <NavigationBar />
                </OnDesktop>

                <OnMobileAndTablet>
                    <MobileNavigationBar store={this.state.navigation} errors={this.state.errors.navigation} />
                </OnMobileAndTablet>

                <div className="container-2 p-0">
                    <section>
                        <Leopalace />
                    </section>
                </div>
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
            </>
        )
    }
}