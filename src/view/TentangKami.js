import React from 'react'
import Base from './Base'

import {Header, AboutCard, Vision, MobileLogoDisplay} from '../component/base/TentangKami/'

import LogoSlider from '../component/slider/LogoSlider'

import bgHeader from '../component/assets/tentangkami-image/header.png'
import Card1 from '../component/base/TentangKami/assets/card-loader1.svg'
import Card2 from '../component/base/TentangKami/assets/card-loader2.svg'

import { OnDesktop, OnMobileAndTablet } from '../constants'
import { SliderPlaceholder } from '../component/base/loader/ImagePlaceholder'



class TentangKami extends Base {
    render() {

        return ( 
            <div>
                <section>
                    <OnDesktop>
                        <div className="container">
                            <Header 
                                bg={bgHeader}
                            />
                        </div>
                    </OnDesktop>
                    <OnMobileAndTablet>
                        <div className="w-100">
                            <Header 
                                bg={bgHeader}
                            />
                        </div>
                    </OnMobileAndTablet>
                </section>

                <section>
                    <div className="container">
                        <AboutCard 
                            store={this.state.abouts}
                        />
                    </div>
                </section>

                <section>
                    {this.state.abouts && this.state.abouts.map((data,d) => {
                        return(
                            <>
                                <Vision
                                    key={d}
                                    store={data.visions}
                                />
                            </>
                        )
                    })}
                </section>

                <section>
                    <OnDesktop>
                        <div className="w-100">
                            <LogoSlider store={this.state.partnership} errors={this.state.errors.partnership} />
                        </div>
                    </OnDesktop>
                    <OnMobileAndTablet>
                        <div className="container">
                            <MobileLogoDisplay />
                        </div>
                    </OnMobileAndTablet>
                </section>
            </div>
        )
    }
}

export default TentangKami
