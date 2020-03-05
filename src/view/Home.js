import React, {Component, createRef} from 'react'
import NavigationBar from '../component/navbar/Navigationbar'
import HeadSlider from '../component/slider/HeadSlider'
import Fasilitas from '../component/Fasilitas'
import DenahUnit from '../component/tab/DenahUnit'
import Maps from '../component/map'
import Gallery from '../component/slider/Gallery'
import AboutSlider from '../component/slider/AboutSlider'
import LogoSlider from '../component/slider/LogoSlider'
import ContactUs from '../component/ContactUs'
import TentangKami from '../component/TentangKami'
import Footer from '../component/Footer'

import MobileNavigationBar from '../component/navbar/mobile/Navigationbar'
import MobileHeaderSlider from '../component/slider/mobile/HeadSlider'

import {MobileFooter} from '../component/footer/mobile/Footer'


import { layoutGenerator } from 'react-break';
import { getSliders, getUnits, getGallery } from '../services/get'


const layout = layoutGenerator({
  mobile: 0,
  tablet: 768,
  desktop: 992,
});

const OnTablet = layout.isAtMost('tablet');
const OnDesktop = layout.is('desktop');


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: [],
      gallery: [],
      units: [],
      errors: {
        sliders:{},
        gallery:{},
        units: {},
      },
      contact: {
        validated: true,
        data: {}
      },
      footer: {
        validated: true,
        data: {}
      }
    }
    this.contrefgelar = createRef()
    this.contrefnama = createRef()
    this.contrefunit = createRef()
    this.contreftelepon = createRef()
    this.contrefemail = createRef()
    this.contrefcatatan = createRef()
    this.footreftitle = createRef()
    this.footrefname = createRef()
    this.footrefemail = createRef()

    this._contactUs = this._contactUs.bind(this)
    this._footer = this._footer.bind(this)
  }
  
  componentDidMount() {
    getSliders()
      .then((res) => this.setState({sliders: res.data}))
      .catch((err) => {
        if (err && err.response) this.setState({errors: {sliders: {code: err.response.status, status: err.response.statusText}}})
      })

    getUnits()
      .then(res => this.setState({units: res.data}))
      .catch(err => {
        if (err && err.response) this.setState({errors: {units: err.response.status, status: err.response.statusText}})
      })

    getGallery()
      .then(res => this.setState({gallery: res.data}))
      .catch((err) => {
        if (err && err.response) this.setState({errors:{gallery:{code:err.response.status, status:err.response.statusText}}})
      })
  }

  _contactUs = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      this.setState({contact:{validated:false}});
        e.preventDefault();
        e.stopPropagation();
    }
    
    const data = {
      gelar: this.contrefgelar.current.value,
      unit: this.contrefunit.current.value,
      nama: this.contrefnama.current.value,
      telepon: this.contreftelepon.current.value,
      email: this.contrefemail.current.value,
      catatan: this.contrefcatatan.current.value
    }
    this.setState({
      contact: {
        data: data
      }
    })
    e.preventDefault();
  }

  _footer = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      this.setState({footer:{validated:false}});
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
      <div>
        <OnDesktop>
          <NavigationBar />
        </OnDesktop>

        <OnTablet>
            <MobileNavigationBar />
        </OnTablet>
        <section>
          <div className="container">
            <OnDesktop>
              <HeadSlider store={this.state.sliders} errors={this.state.errors.sliders} />
            </OnDesktop>
            <OnTablet>
              <MobileHeaderSlider store={this.state.sliders} errors={this.state.errors.sliders}  />
            </OnTablet>
          </div>
        </section>
        <section>
          <div className="container">
            <OnDesktop>
              <Fasilitas />
            </OnDesktop>
            <OnTablet>
              <Fasilitas />
            </OnTablet>
          </div>
        </section>
        <section>
            <DenahUnit store={this.state.units} errors={this.state.errors.units} />
        </section>
        <section>
          <div className="container">
            <Maps />
          </div>
        </section>
        <section>
          <div className="w-100">
            <Gallery store={this.state.gallery} errors={this.state.errors.gallery} />
          </div>
        </section>
        {/* <section>
          <div className="container">
            <AboutSlider />
          </div>
        </section> */}
        <section>
          <div className="container">
            <TentangKami />
          </div>
        </section>
        <section>
          <div className="w-100">
            <LogoSlider />
          </div>
        </section>
        <section>
          <div className="container">
            <ContactUs
              // validated={this.state.contact.validated}
              onSubmit={this._contactUs}
              gelarRef={this.contrefgelar}
              namaRef={this.contrefnama}
              unitRef={this.contrefunit}
              teleponRef={this.contreftelepon}
              emailRef={this.contrefemail}
              catatanRef={this.contrefcatatan}
            />
          </div>
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
          <OnTablet>
            <MobileFooter 
              validated={this.state.footer.validated}
              onSubmit={this._footer}
              titleRef={this.footreftitle}
              nameRef={this.footrefname}
              emailRef={this.footrefemail}
            />
          </OnTablet>
        </section>
      </div>
    )
  }
}
export default Home