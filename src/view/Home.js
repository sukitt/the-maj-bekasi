import React, { StrictMode, useRef } from 'react'
import Base from './Base'

// COMPONENT
import HeadSlider from '../component/slider/HeadSlider'
import Fasilitas from '../component/fasilitas/Fasilitas'
import DenahUnit from '../component/tab/DenahUnit'
import Maps from '../component/map/Maps'
import Gallery from '../component/slider/Gallery'
// import AboutSlider from '../component/slider/AboutSlider'
import LogoSlider from '../component/slider/LogoSlider'
import ContactUs from '../component/contact-us/ContactUs'
import TentangKami from '../component/card/TentangKami'
import Blogs from '../component/card/Blogs'
import MobileHeaderSlider from '../component/slider/mobile/HeadSlider'
import MobileFasilitas from '../component/fasilitas/mobile/Fasilitas'
import MobileDenahUnit from '../component/tab/mobile/DenahUnit'
import MobileGallery from '../component/slider/mobile/Gallery'
import MobileAboutSlider from '../component/slider/mobile/AboutSlider'
import MobileBlogs from '../component/card/mobile/Blogs'
import MobileContactUs from '../component/contact-us/MobileContactUs'
import MobileMaps from '../component/map/mobile/Maps'

import { OnDesktop, OnMobileAndTablet } from '../constants'
import LoaderSpinnerData from '../component/base/loader/LoaderSpinnerData'

class Home extends Base {
  render() {
    return (
      <div>
        <LoaderSpinnerData show={this.state.sentLoading} />
        <OnDesktop>
          {/* <section>
            <div className="container">
              <HeadSlider store={this.state.sliders} errors={this.state.errors.sliders} />
            </div>
          </section>

          <section>
            <div className="container">  
              <Fasilitas id="fasilitas" fasilitasRef={this.scrollFasilitas} />
            </div>
          </section>

          <section>
            <div className="container">
              <DenahUnit id="denah-unit" store={this.state.units} denahUnitRef={this.scrollDenahUnit} />
            </div>
          </section>

          <section>
            <div className="container">
              <Maps id="lokasi" store={this.state.location} lokasiRef={this.scrollMap} />
            </div>
          </section>

          <section>
            <div className="w-100">
              <Gallery id="galeri" store={this.state.gallery} galeriRef={this.scrollGaleri} />
            </div>
          </section>
          
          <section>
            <div className="container">
              <TentangKami id="tentangkami" />
            </div>
          </section> */}
          
          <section>
            <div className="w-100">
              <LogoSlider store={this.state.partnership} errors={this.state.errors.partnership} />
            </div>
          </section>

          {/* <section>
            <Blogs store={this.state.blogs} />
          </section>

          <section>
            <div className="container">
                <ContactUs
                  id="contact-us"
                  onSubmit={this._contactUs}
                  gelarRef={this.contrefgelar}
                  namaRef={this.contrefnama}
                  unitRef={this.contrefunit}
                  teleponRef={this.contreftelepon}
                  emailRef={this.contrefemail}
                  catatanRef={this.contrefcatatan}
                  validated={this.state.contact.validated}
                  success={this.state.contact.success}
                />
              </div>
          </section> */}
        </OnDesktop>

        {/* Mobile Table Responsive */}
        <OnMobileAndTablet>
          <section>
            <div className="w-100">  
              <MobileHeaderSlider store={this.state.sliders} />
            </div>
          </section>

          <section>
            <div className="container">
              <MobileFasilitas id="fasilitas" fasilitasRef={this.scrollFasilitas} />
            </div>
          </section>

          <section>
            <MobileDenahUnit id="denah-unit" store={this.state.units} denahUnitRef={this.scrollDenahUnit} />
          </section>

          <section>
            <div className="container">
              <MobileMaps id="lokasi" store={this.state.location} lokasiRef={this.scrollMap} />
            </div>
          </section>

          <section>
            <MobileGallery id="galeri" galeriRef={this.scrollGaleri} store={this.state.gallery} />
          </section>

          <section>
            <MobileAboutSlider store={this.state.abouts} />
          </section>

          <section>
            <MobileBlogs store={this.state.blogs} />
          </section>

          <section>
            <MobileContactUs 
              id="contact-us"
              onSubmit={this._contactUs}
              gelarRef={this.contrefgelar}
              namaRef={this.contrefnama}
              unitRef={this.contrefunit}
              teleponRef={this.contreftelepon}
              emailRef={this.contrefemail}
              catatanRef={this.contrefcatatan}
              validated={this.state.contact.validated}
              success={this.state.contact.success}
            />
          </section>
        </OnMobileAndTablet>
      </div>
    )
  }
}

export default Home