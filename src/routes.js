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
            <Route path="/the-maj-bekasi/:args?" component={Home} />
            <Route exact path="/tentang-kami" component={TentangKami} />
            <Route exact path="/partnership" component={Partnership} />
            <Route exact path="/expertice" component={Expertice} />
            <Route exact path="/blog/:id" children={<Blog />} />
<<<<<<< HEAD
            <Route path="*" component={Page404} />
=======
            <Route path="" component={Page404} />
>>>>>>> 36085655f54e012acbbb0c42cf327f7271265992
        </Switch>
    )
}

export default BaseRoute