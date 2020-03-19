import { Component, createRef } from 'react'
import { getNavbar, getSliders, getUnits, getGallery, getPartnership, getLocation, getAbouts, getBlogs, getExpertice } from '../services/get'

export default class Base extends Component{
    constructor(props) {
        super(props);
        this.state = {
          navigation: [],
          sliders: [],
          gallery: [],
          units: [],
          partnership: [],
          location: [],
          blogs: [],
          abouts: [],
          expertice: [],
          errors: {
            abouts:{},
            sliders:{},
            gallery:{},
            units: {},
            partnership: {},
            navigation: {},
            blogs: {},
            location: {},
            expertice: {},
          },
          contact: {
            validated: true,
            data: {}
          },
          footer: {
            validated: true,
            data: {}
          }
        }
        this.contrefgelar = createRef()
        this.contrefnama = createRef()
        this.contrefunit = createRef()
        this.contreftelepon = createRef()
        this.contrefemail = createRef()
        this.contrefcatatan = createRef()
        this.footreftitle = createRef()
        this.footrefname = createRef()
        this.footrefemail = createRef()
    
        this._contactUs = this._contactUs.bind(this)
        this._footer = this._footer.bind(this)
      }
      
      componentDidMount() {
        getNavbar()
          .then(res => this.setState({navigation: res.data}))
          .catch((err) => {
            if (err && err.response) this.setState({errors:{navigation:{code:err.response.status, status:err.response.statusText}}})
          })
    
        getSliders()
          .then((res) => this.setState({sliders: res.data}))
          .catch((err) => {
            if (err && err.response) this.setState({errors: {sliders: {code: err.response.status, status: err.response.statusText}}})
          })
    
        getUnits()
          .then(res => this.setState({units: res.data}))
          .catch(err => {
            if (err && err.response) this.setState({errors: {units: err.response.status, status: err.response.statusText}})
          })
    
        getGallery()
          .then(res => this.setState({gallery: res.data}))
          .catch((err) => {
            if (err && err.response) this.setState({errors:{gallery:{code:err.response.status, status:err.response.statusText}}})
          })
        getPartnership()
          .then(res => this.setState({partnership: res.data}))
          .catch((err) => {
            if (err && err.response) this.setState({errors:{partnership:{code:err.response.status, status:err.response.statusText}}})
          })
        getLocation()
          .then(res => this.setState({location: res.data}))
          .catch((err) => {
            if (err && err.response) this.setState({errors:{location:{code:err.response.status, status:err.response.statusText}}})
          })
        getAbouts()
          .then(res => this.setState({abouts: res.data}))
          .catch((err) => {
            if (err && err.response) this.setState({errors:{abouts:{code:err.response.status, status:err.response.statusText}}})
          })
        getBlogs()
          .then(res => this.setState({blogs: res.data}))
          .catch((err) => {
            if (err && err.response) this.setState({errors:{blogs:{code:err.response.status, status:err.response.statusText}}})
          })
        getExpertice()
          .then(res => this.setState({expertice: res.data}))
          .catch((err) => {
            if (err && err.response) this.setState({errors:{expertice:{code:err.response.status, status:err.response.statusText}}})
          })
      }
    
      _contactUs = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          this.setState({contact:{validated:false}});
            e.preventDefault();
            e.stopPropagation();
        }
        
        const data = {
          gelar: this.contrefgelar.current.value,
          unit: this.contrefunit.current.value,
          nama: this.contrefnama.current.value,
          telepon: this.contreftelepon.current.value,
          email: this.contrefemail.current.value,
          catatan: this.contrefcatatan.current.value
        }
        this.setState({
          contact: {
            data: data
          }
        })
        e.preventDefault();
      }
    
      _footer = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          this.setState({footer:{validated:false}});
          e.preventDefault();
          e.stopPropagation();
        }
    
        const data = {
          title: this.footreftitle.current.value,
          name: this.footrefname.current.value,
          email: this.footrefemail.current.value
        }
        this.setState({
          footer: {
            data: data
          }
        })
        e.preventDefault()
      }
}