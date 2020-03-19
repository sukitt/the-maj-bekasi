import React from 'react'
import { Route } from 'react-router-dom'

import Home from './views/Home'
import TentangKami from './views/TentangKami'
import Partnership from './view/Partnership'
import Expertice from './view/Expertice'
import Blog from './view/Blog'

const BaseRoute = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/tentang-kami" component={TentangKami} />
            <Route exact path="/partnership" component={Partnership} />
            <Route exact path="/expertice" component={Expertice} />
            <Route exact path="/blog:id" component={Blog} />
        </div>
    )
}

export default BaseRoute