import React from 'react'
import Base from './Base'
import BlogSlider from '../component/base/Slider/blogSlider'
import BlogTabs from '../component/tab/BlogTab/BlogTabs'

class BlogList extends Base {
    render(){
        return(
            <>
                <section>
                    <div className="container">
                        <BlogSlider store={this.state.blogs} />
                    </div>
                </section>
                <section>
                    <div className="container">
                        <BlogTabs store={this.state.blogs} />
                    </div>
                </section>
            </>
        )
    }

}

export default BlogList