import React, {Component} from 'react'
import NavigationBar from '../component/navbar/Navigationbar'
import HeadSlider from '../component/slider/HeadSlider'
import Fasilitas from '../component/Fasilitas'
import { getSliders } from '../services/get'
import DenahUnit from '../component/tab/DenahUnit'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: [],
      errors: {
        sliders:{}
      },
    }
  }
  
  componentDidMount() {
    getSliders()
      .then((res) => this.setState({sliders: res.data}))
      .catch((err) => {
        if (err) this.setState({errors: {sliders: {code: err.response.status, status: err.response.statusText}}})
      })
  }

  render() {
    return (
      <div>
        <NavigationBar />
        <section>
          <div className="container">
            <HeadSlider store={this.state.sliders} errors={this.state.errors.sliders} />
          </div>
        </section>
        <section>
          <div className="container">
            <Fasilitas />
          </div>
        </section>
        <section>
          <div className="container">
            <DenahUnit />
          </div>
        </section>
      </div>
    )
  }
}
export default Home