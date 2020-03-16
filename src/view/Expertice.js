import React, { Component } from 'react'
import Whatsapp from '../component/base/whatsapp';

import { layoutGenerator } from 'react-break';
import NavigationBar from '../component/navbar/Navigationbar';

import MobileNavigationBar from '../component/navbar/mobile/Navigationbar'

import Leopalace from '../component/base/expertice';

import { getNavbar, getSliders, getUnits, getGallery, getPartnership, getLocation, getAbouts, getBlogs } from '../services/get'

const layout = layoutGenerator({
    mobile: 0,
    tablet: 768,
    desktop: 992,
  });
  
const OnMobileAndTablet = layout.isAtMost('tablet');
const OnDesktop = layout.is('desktop');
  

export default class Expertice extends Component{
    constructor(props){
        super(props);
        this.state = {
            navigation: [],
            errors:{
                navigation: {},
            }
        }
    }

    componentDidMount() {
        getNavbar()
            .then(res => this.setState({navigation: res.data}))
            .catch((err) => {
                if (err && err.response) this.setState({errors:{navigation:{code:err.response.status, status:err.response.statusText}}})
            })
    }

    render(){
        return(
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
            </>
        )
    }
}