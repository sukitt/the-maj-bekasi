import React from 'react'
import Base from './Base'
import BlogSlider from '../component/base/Slider/blogSlider'
import BlogTabs from '../component/tab/BlogTab/BlogTabs'

class BlogList extends Base {
    render(){
        return(
            <>
                <BlogSlider store={this.state.blogs} />
                <BlogTabs store={this.state.blogs} />
            </>
        )
    }

}

export default BlogList