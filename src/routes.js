import React from 'react'
import { Route } from 'react-router-dom'

import Home from './view/Home'
import TentangKami from './view/TentangKami'
import Partnership from './view/Partnership'
import Expertice from './view/Expertice'
import Blog from './view/Blog'
import TestingForm from './view/TestingForm'

const BaseRoute = () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/tentang-kami" component={TentangKami} />
            <Route exact path="/partnership" component={Partnership} />
            <Route exact path="/expertice" component={Expertice} />
            <Route exact path="/blog/:id" children={<Blog />} />
            <Route exact path="/testing-form" component={TestingForm} />
        </div>
    )
}

export default BaseRoute