import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from './view/Home'
import TentangKami from './view/TentangKami'
import Partnership from './view/Partnership'
import Expertice from './view/Expertice'
import Blog from './view/Blog'
import PrivacyPolicy from './view/PrivacyPolicy'
import Page404 from './view/errors/Page404'

const BaseRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/section/:args?" component={Home} />
            <Route exact path="/tentang-kami" component={TentangKami} />
            <Route exact path="/partnership" component={Partnership} />
            <Route exact path="/expertise" component={Expertice} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/blog/:id" children={<Blog />} />
            <Route path="" component={Page404} />
        </Switch>
    )
}

export default BaseRoute