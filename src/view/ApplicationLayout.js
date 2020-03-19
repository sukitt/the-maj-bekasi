import React from 'react'
import { NavigationBar, MobileNavigationBar, Footer, MobileFooter } from '../component/base_component/'

import { OnDesktop, OnMobileAndTablet } from '../constants/'
import Base from './Base'
import Whatsapp from '../component/base/whatsapp'

export default class ApplicationLayout extends Base {
    render() {
        return (
            <div>
                <Whatsapp />
                <header>
                    <OnDesktop>
                        <NavigationBar store={this.state.navigation} errors={this.state.errors.navigation} />
                    </OnDesktop>
                    <OnMobileAndTablet>
                        <MobileNavigationBar store={this.state.navigation} errors={this.state.errors.navigation} />
                    </OnMobileAndTablet>
                </header>

                <div id="content">
                    {this.props.children}
                </div>

                <footer>
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
                </footer>
            </div>
        )
    }
}