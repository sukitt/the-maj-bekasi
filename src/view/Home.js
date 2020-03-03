import React, {Component} from 'react'
import NavigationBar from '../component/navbar/Navigationbar'
import HeadSlider from '../component/slider/HeadSlider'
import Fasilitas from '../component/Fasilitas'
import { getSliders, getUnits, getGallery } from '../services/get'
import DenahUnit from '../component/tab/DenahUnit'
import Maps from '../component/map'
// import AboutSlider from '../component/slider/AboutSlider'


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: [],
      gallery: [],
      units: [],
      errors: {
        sliders:{},
        gallery:{}
      },
    }
  }
  
  componentDidMount() {
    getSliders()
      .then((res) => this.setState({sliders: res.data}))
      .catch((err) => {
        if (err && err.response) this.setState({errors: {sliders: {code: err.response.status, status: err.response.statusText}}})
      })

    getUnits()
      .then(res => this.setState({units: res.data}))
      .catch(err => {if (err) throw err})

    getGallery()
      .then(res => this.setState({gallery: res.data}))
      .catch((err) => {
        if (err && err.response) this.setState({errors:{gallery:{code:err.response.status, status:err.response.statusText}}})
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
            <DenahUnit store={this.state.units} />
        </section>
        <section>
          <div className="container">
            <Maps />
          </div>
        </section>
        {/* <section>
          <div className="container">
            <AboutSlider />
          </div>
        </section> */}
      </div>
    )
  }
}
export default Home