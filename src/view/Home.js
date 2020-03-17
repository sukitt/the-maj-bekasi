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
import Blogs from '../component/card/Blogs'

import MobileNavigationBar from '../component/navbar/mobile/Navigationbar'
import MobileHeaderSlider from '../component/slider/mobile/HeadSlider'
import MobileFasilitas from '../component/fasilitas/mobile/Fasilitas'
import MobileDenahUnit from '../component/tab/mobile/DenahUnit'
import MobileGallery from '../component/slider/mobile/Gallery'
import MobileLogoSlider from '../component/slider/mobile/LogoSlider'
import MobileAboutSlider from '../component/slider/mobile/AboutSlider'
import MobileBlogs from '../component/card/mobile/Blogs'
import MobileContactUs from '../component/contact-us/MobileContactUs'
import MobileFooter from '../component/footer/mobile/Footer'
import MobileMaps from '../component/map/mobile/Maps'




import { layoutGenerator } from 'react-break';
import { getNavbar, getSliders, getUnits, getGallery, getPartnership, getLocation, getAbouts, getBlogs } from '../services/get'
import Whatsapp from '../component/base/whatsapp'


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
      blogs: [],
      abouts: [],
      errors: {
        abouts:{},
        sliders:{},
        gallery:{},
        units: {},
        partnership: {},
        navigation: {},
        blogs: {},
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
    getAbouts()
      .then(res => this.setState({abouts: res.data}))
      .catch((err) => {
        if (err && err.response) this.setState({errors:{abouts:{code:err.response.status, status:err.response.statusText}}})
      })
    getBlogs()
      .then(res => this.setState({blogs: res.data}))
      .catch((err) => {
        if (err && err.response) this.setState({errors:{blogs:{code:err.response.status, status:err.response.statusText}}})
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
        <Whatsapp />
        <OnDesktop>
            <NavigationBar store={this.state.navigation} />
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
              <MobileHeaderSlider store={this.state.sliders} />
            </div>
          </OnMobileAndTablet>
        </section>
        <section>
          <div className="container">
            <OnDesktop>
              <Fasilitas id="fasilitas" />
            </OnDesktop>

            <OnMobileAndTablet>
              <MobileFasilitas id="fasilitas" />
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
              <Gallery store={this.state.gallery} />
            </div>
          </OnDesktop>

          <OnMobileAndTablet>
              <MobileGallery store={this.state.gallery} />
          </OnMobileAndTablet>
        </section>

        {/* Slider Logo MobileTablet */}
        {/* <OnMobileAndTablet>
          <section>
            <MobileLogoSlider store={this.state.partnership} />
          </section>
        </OnMobileAndTablet> */}

        <OnDesktop>
          <section>
            <div className="container">
              <TentangKami />
            </div>
          </section>
        </OnDesktop>

        <OnMobileAndTablet>
          <section>
              <MobileAboutSlider store={this.state.abouts} errors={this.state.errors.abouts} />
          </section>
        </OnMobileAndTablet>

        {/* Slider Logo Desktop */}
        <OnDesktop>
          <section>
            <div className="w-100">
              <LogoSlider store={this.state.partnership} errors={this.state.errors.partnership} />
            </div>
          </section>

          <section>
            <Blogs store={[
              {
                id: 1, 
                text: "Sasar Milenial, MAJ Residences Tampilkan Filosofi Jepang", 
                posted_at: "29 November 2019", 
                image: "https://img.beritasatu.com/cache/beritasatu/910x580-2/1575006937.jpg", 
                link: "https://www.beritasatu.com/ekonomi/588011/ekonomi/588011-sasar-milenial-maj-residences-tampilkan-filosofi-jepang"
                },{
                  id: 2, 
                  text: "Pilihan hunian dan investasi terbaik di Bekasi", 
                  posted_at: "04 February 2020", 
                  image: "https://uc3208a9a9067f8e9fdba2871a96.previews.dropboxusercontent.com/p/thumb/AAs8oanYV6aAb3SeujIbUWBpGoyNwpjnjPKa0kSWxTjOJkdHOhDgRIfXUwKZlc4JztT0WThxdYh7vJVlperb5v_5Ob_nwfauH7Hajtdyl_Vwsx7NSV7dazi15zqABpk4pOekJgIJ3sNcKm6h_hMc5vuUlYjYheUzX1rqCOnuKvCCmWPyvxyVid_DE3Uqu5BpOXT_GJMVxGEGjmDTg4FKpCPZg12BSDwVrEveFj5c8UfshlZq5ox0OiAcjcld4HbC56HxWPo5XHrpHvg7BilZVG-3460sNxq13ZnhYVz39opht1jhpcBONGtUfJtD-_dpKl4Cd70R3mzlUJrHJJ8DHm75RK-PaGpnVGkVurG5h-EddM3OT7k026vmFk4KBrCCfnv-fY_VF8oc3BdM2aAEQTzeKJxZ-pxyA6cxUEa5DwQ8PkjEqXbJE7RlRvjCXt6EcvZbjsdij19Xw8SbHuKxE-2Kbbkp4byfjzt9B0-tqx14lhmZ_MOJp1LpZRhuH7QGmVmvmOFAoOa4uz7shXNdBDgoQT7IDVJlJILp5IQP3u0359el0YpzSXTd4bIPylBgaj6D2mbLOqXSV4yxlvCVXzYqZanGxxf4pkvyVUKoyD4smQ/p.jpeg?fv_content=true&size_mode=5", 
                  link: "#linkTo2"
                },{
                  id: 3, 
                  text: "Sasar Milenial, MAJ Residences Tampilkan Filosofi Jepang", 
                  posted_at: "29 November 2019", 
                  image: "https://img.beritasatu.com/cache/beritasatu/910x580-2/1575006937.jpg", 
                  link: "https://www.beritasatu.com/ekonomi/588011/ekonomi/588011-sasar-milenial-maj-residences-tampilkan-filosofi-jepang"
                }]} 
              />
          </section>
        </OnDesktop>

        {/* <section>
          <Blog store={this.state.blogs} errors={this.state.errors.blogs} />
        </section> */}

        <section>
          <OnDesktop>
            <div className="container">
              <ContactUs
                onSubmit={this._contactUs}
                gelarRef={this.contrefgelar}
                namaRef={this.contrefnama}
                unitRef={this.contrefunit}
                teleponRef={this.contreftelepon}
                emailRef={this.contrefemail}
                catatanRef={this.contrefcatatan}
              />
            </div>
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