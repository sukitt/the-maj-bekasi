import React, {Component, createRef} from 'react'
import NavigationBar from '../component/navbar/Navigationbar'
import HeadSlider from '../component/slider/HeadSlider'
import Fasilitas from '../component/fasilitas/Fasilitas'
import DenahUnit from '../component/tab/DenahUnit'
import Maps from '../component/map/Maps'
import Gallery from '../component/slider/Gallery'
import AboutSlider from '../component/slider/AboutSlider'
import LogoSlider from '../component/slider/LogoSlider'
import ContactUs from '../component/contact-us/ContactUs'
import TentangKami from '../component/TentangKami'
import Footer from '../component/footer/Footer'

import MobileNavigationBar from '../component/navbar/mobile/Navigationbar'
import MobileHeaderSlider from '../component/slider/mobile/HeadSlider'
import MobileFasilitas from '../component/fasilitas/mobile/Fasilitas'
import MobileDenahUnit from '../component/tab/mobile/DenahUnit'
import MobileSimulasi from '../component/tab/mobile/Simulasi'
import MobileGallery from '../component/slider/mobile/Gallery'
import MobileLogoSlider from '../component/slider/mobile/LogoSlider'
import MobileAboutSlider from '../component/slider/mobile/AboutSlider'
import MobileContactUs from '../component/contact-us/MobileContactUs'
import MobileFooter from '../component/footer/mobile/Footer'
import MobileMaps from '../component/map/mobile/Maps'




import { layoutGenerator } from 'react-break';
import { getNavbar, getSliders, getUnits, getGallery, getPartnership, getLocation } from '../services/get'


const layout = layoutGenerator({
  mobile: 0,
  tablet: 768,
  desktop: 992,
});

const OnMobileAndTablet = layout.isAtMost('tablet');
const OnDesktop = layout.is('desktop');


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navigation: [],
      sliders: [],
      gallery: [],
      units: [],
      partnership: [],
      location: [],
      errors: {
        sliders:{},
        gallery:{},
        units: {},
        partnership: {},
        navigation: {},
        location: {},
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
      .catch(err => {
        if (err && err.response) this.setState({errors: {units: err.response.status, status: err.response.statusText}})
      })

    getGallery()
      .then(res => this.setState({gallery: res.data}))
      .catch((err) => {
        if (err && err.response) this.setState({errors:{gallery:{code:err.response.status, status:err.response.statusText}}})
      })
    getPartnership()
      .then(res => this.setState({partnership: res.data}))
      .catch((err) => {
        if (err && err.response) this.setState({errors:{partnership:{code:err.response.status, status:err.response.statusText}}})
      })
    getLocation()
      .then(res => this.setState({location: res.data}))
      .catch((err) => {
        if (err && err.response) this.setState({errors:{location:{code:err.response.status, status:err.response.statusText}}})
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
    if (this.state.errors)
    return (
      <div>
        <OnDesktop>
            <NavigationBar />
        </OnDesktop>

        <OnMobileAndTablet>
            <MobileNavigationBar store={this.state.navigation} errors={this.state.errors.navigation} />
        </OnMobileAndTablet>
        <section>
          <OnDesktop>
            <div className="container">
                <HeadSlider store={this.state.sliders} errors={this.state.errors.sliders} />
            </div>
          </OnDesktop>
          <OnMobileAndTablet>
            <div className="w-100">  
              <MobileHeaderSlider store={this.state.sliders} errors={this.state.errors.sliders}  />
            </div>
          </OnMobileAndTablet>
        </section>
        <section>
          <div className="container">
            <OnDesktop>
              <Fasilitas />
            </OnDesktop>

            <OnMobileAndTablet>
              <MobileFasilitas />
            </OnMobileAndTablet>
          </div>
        </section>
        <section>
          <OnDesktop>
            <DenahUnit store={this.state.units} errors={this.state.errors.units} />
          </OnDesktop>

          <OnMobileAndTablet>
            <MobileDenahUnit storeUnit={this.state.units} />
          </OnMobileAndTablet>
          <OnMobileAndTablet>
            <MobileSimulasi />
          </OnMobileAndTablet>
        </section>
        <section>
          <OnDesktop>
            <div className="container">
              <Maps store={this.state.location} errors={this.state.errors.location} />
            </div>
          </OnDesktop>
          <OnMobileAndTablet>
            <div className="container">
              <MobileMaps store={this.state.location} errors={this.state.errors.location} />
            </div>
          </OnMobileAndTablet>
        </section>
        <section>
          <OnDesktop>
            <div className="w-100">
              <Gallery store={this.state.gallery} errors={this.state.errors.gallery} />
            </div>
          </OnDesktop>

          <OnMobileAndTablet>
              <MobileGallery store={this.state.gallery} errors={this.state.errors.gallery} />
          </OnMobileAndTablet>
        </section>

        {/* Slider Logo MobileTablet */}
        <OnMobileAndTablet>
          <section>
            <MobileLogoSlider store={this.state.partnership} errors={this.state.errors.partnership} />
          </section>
        </OnMobileAndTablet>
{/* 
        <OnDesktop>
          <section>
              <div className="container">
                <AboutSlider />
              </div>
          </section>
          <section>
            <div className="container">
              <TentangKami />
            </div>
          </section>
        </OnDesktop> */}

        <OnMobileAndTablet>
          <section>
            <div className="container">
              <MobileAboutSlider />
            </div>
          </section>
        </OnMobileAndTablet>

        {/* Slider Logo Desktop */}
        <OnDesktop>
          <section>
            <div className="w-100">
              <LogoSlider store={this.state.partnership} errors={this.state.errors.partnership} />
            </div>
          </section>
        </OnDesktop>

        <section>
          <div className="container">
          <OnDesktop>
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
          </OnDesktop>

          <OnMobileAndTablet>
            <MobileContactUs 
              onSubmit={this._contactUs}
              gelarRef={this.contrefgelar}
              namaRef={this.contrefnama}
              unitRef={this.contrefunit}
              teleponRef={this.contreftelepon}
              emailRef={this.contrefemail}
              catatanRef={this.contrefcatatan}
            />
          </OnMobileAndTablet>
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
export default Home