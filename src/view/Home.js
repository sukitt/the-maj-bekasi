import React from 'react'
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
import TentangKami from '../component/TentangKami'
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
import Whatsapp from '../component/base/whatsapp'


import { layoutGenerator } from 'react-break';
const layout = layoutGenerator({
  mobile: 0,
  tablet: 768,
  desktop: 992,
});
const OnMobileAndTablet = layout.isAtMost('tablet');
const OnDesktop = layout.is('desktop');


class Home extends Base {

  render() {
    if (this.state.errors)
    return (
      <div>
        <Whatsapp />
        <OnDesktop>
          <section>
            <div className="container">
              <HeadSlider store={this.state.sliders} errors={this.state.errors.sliders} />
            </div>
          </section>

          <section>
            <div className="container">            
              <Fasilitas id="fasilitas" />
            </div>
          </section>

          <section>
            <div className="container">
              <DenahUnit store={this.state.units} errors={this.state.errors.units} />
            </div>
          </section>

          <section>
            <div className="container">
              <Maps store={this.state.location} errors={this.state.errors.location} />
            </div>
          </section>

          <section>
            <div className="w-100">
              <Gallery store={this.state.gallery} />
            </div>
          </section>
          
          <section>
            <div className="container">
              <TentangKami />
            </div>
          </section>
          
          <section>
            <div className="w-100">
              <LogoSlider store={this.state.partnership} errors={this.state.errors.partnership} />
            </div>
          </section>

          <section>
            <Blogs store={this.state.blogs} />
          </section>

          <section>
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
          </section>
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
              <MobileFasilitas id="fasilitas" />
            </div>
          </section>

          <section>
            <MobileDenahUnit storeUnit={this.state.units} />
          </section>

          <section>
            <div className="container">
              <MobileMaps store={this.state.location} errors={this.state.errors.location} />
            </div>
          </section>

          <section>
            <MobileGallery store={this.state.gallery} />
          </section>

          <section>
            <MobileAboutSlider store={this.state.abouts} errors={this.state.errors.abouts} />
          </section>

          <section>
            <MobileBlogs store={this.state.blogs} />
          </section>

          <section>
            <MobileLogoSlider store={this.state.partnership} />
          </section>

          <section>
            <MobileContactUs 
              onSubmit={this._contactUs}
              gelarRef={this.contrefgelar}
              namaRef={this.contrefnama}
              unitRef={this.contrefunit}
              teleponRef={this.contreftelepon}
              emailRef={this.contrefemail}
              catatanRef={this.contrefcatatan}
            />
          </section>

          <section>
            <MobileFooter 
              validated={this.state.footer.validated}
              onSubmit={this._footer}
              titleRef={this.footreftitle}
              nameRef={this.footrefname}
              emailRef={this.footrefemail}
            />
          </section>
        </OnMobileAndTablet>
      </div>
    )
  }
}
export default Home