import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from './view/Home'
import TentangKami from './view/TentangKami'
import Partnership from './view/Partnership'
import Expertice from './view/Expertice'
import Blog from './view/Blog'
import Page404 from './view/errors/Page404'

const BaseRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/section/:args?" component={Home} />
            <Route exact path="/tentang-kami" component={TentangKami} />
            <Route exact path="/partnership" component={Partnership} />
            <Route exact path="/expertice" component={Expertice} />
            <Route exact path="/blog/:slug" component={Blog} />
            <Route component={Page404} />
        </Switch>
    )
}

export default BaseRoute