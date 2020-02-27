import React, {Component} from 'react'
import NavigationBar from '../component/navbar/Navigationbar'
import HeadSlider from '../component/slider/HeadSlider'


class Home extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <section>
          <div className="container">
            <HeadSlider />
          </div>
        </section>
      </div>
    )
  }
}
export default Home