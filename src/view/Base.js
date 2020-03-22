import { Component, createRef } from 'react'
import $ from 'jquery'
import { getNavbar, getSliders, getUnits, getGallery, getPartnership, getLocation, getAbouts, getBlogs, getExpertice } from '../services/get'
import {storeContact} from '../services/post'

export default class Base extends Component {
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
        abouts: {},
        sliders: {},
        gallery: {},
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

    this.scrollFasilitas = createRef()
    this.scrollDenahUnit = createRef()
    this.scrollGaleri = createRef()
    this.scrollMap = createRef()

    this._contactUs = this._contactUs.bind(this)
    this._footer = this._footer.bind(this)
  }

  componentDidMount() {
    const promiseNavbar = Promise.resolve(
      getNavbar()
      .then(res => this.setState({ navigation: res.data }))
      .catch((err) => {
        if (err && err.response) this.setState({ errors: { navigation: { code: err.response.status, status: err.response.statusText } } })
      })
    )

    const promiseSlider = Promise.resolve(
      getSliders()
      .then((res) => this.setState({ sliders: res.data }))
      .catch((err) => {
        if (err && err.response) this.setState({ errors: { sliders: { code: err.response.status, status: err.response.statusText } } })
      })
    )

    const promiseUnit = Promise.resolve(
      getUnits()
      .then(res => this.setState({ units: res.data }))
      .catch(err => {
        if (err && err.response) this.setState({ errors: { units: err.response.status, status: err.response.statusText } })
      })
    )

    const promiseGaleri = Promise.resolve(
      getGallery()
      .then(res => this.setState({ gallery: res.data }))
      .catch((err) => {
        if (err && err.response) this.setState({ errors: { gallery: { code: err.response.status, status: err.response.statusText } } })
      })
    )

    const promisePartner = Promise.resolve(
      getPartnership()
      .then(res => this.setState({ partnership: res.data }))
      .catch((err) => {
        if (err && err.response) this.setState({ errors: { partnership: { code: err.response.status, status: err.response.statusText } } })
      })
    )

    const promiseLocation = Promise.resolve(
      getLocation()
      .then(res => this.setState({ location: res.data }))
      .catch((err) => {
        if (err && err.response) this.setState({ errors: { location: { code: err.response.status, status: err.response.statusText } } })
      })
    )
    
    const promiseAbout = Promise.resolve(
      getAbouts()
      .then(res => this.setState({ abouts: res.data }))
      .catch((err) => {
        if (err && err.response) this.setState({ errors: { abouts: { code: err.response.status, status: err.response.statusText } } })
      })
    )

    const promiseBlog = Promise.resolve(
      getBlogs()
      .then(res => this.setState({ blogs: res.data }))
      .catch((err) => {
        if (err && err.response) this.setState({ errors: { blogs: { code: err.response.status, status: err.response.statusText } } })
      })
    )
    
    const promiseExpert = Promise.resolve(
      getExpertice()
      .then(res => this.setState({ expertice: res.data }))
      .catch((err) => {
        if (err && err.response) this.setState({ errors: { expertice: { code: err.response.status, status: err.response.statusText } } })
      })
    )
    
    Promise.all([promiseNavbar, promiseSlider, promiseUnit, promiseGaleri, promisePartner, promiseLocation, promiseAbout, promiseBlog, promiseExpert])
      .then(() => {
        setTimeout(()=>{
          document.getElementById('nav-fasilitas').addEventListener('click', this._handleClickFasilitas)
          document.getElementById('nav-denah-unit').addEventListener('click',this._handleClickDenahUnit)
          document.getElementById('nav-lokasi').addEventListener('click', this._handleClickLokasi)
          document.getElementById('nav-galeri').addEventListener('click',this._handleClickGaleri)
        }, 3000)
      })
      .catch(err => console.log(err))
  }
  _contactUs = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      this.setState({ contact: { validated: false } });
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
      this.setState({ footer: { validated: false } });
      e.preventDefault();
      e.stopPropagation();
    }

    const data = {
      title: this.footreftitle.current.value,
      name: this.footrefname.current.value,
      email: this.footrefemail.current.value
    }
    // this.setState({
    //   contact: {
    //     data: data
    //   }
    // })
    e.preventDefault()
    storeContact(data)
      .then(res => alert(res.data))
      .catch((err) => {
        if (err) console.log(err.response)
      })
  }

  _handleClickFasilitas = () => {
    if (this.scrollFasilitas.current) {
      window.scrollTo({top: this.scrollFasilitas.current.offsetTop, behavior: "smooth"})
      // $('html, body').animate({scrollTop: this.scrollFasilitas.current.offsetTop}, 2000)
    }
  }

  _handleClickDenahUnit = () => {
    if (this.scrollDenahUnit.current) {
      window.scrollTo({top: this.scrollDenahUnit.current.offsetTop, behavior: "smooth"})
    }
    // this.scrollDenahUnit.current && $('html, body').animate({scrollTop: this.scrollDenahUnit.current.offsetTop}, 2000)
  }

  _handleClickLokasi = () => {
    // alert("clicked")
    if (this.scrollMap.current) {
      window.scrollTo({top: this.scrollMap.current.offsetTop, behavior: "smooth"})
    }
    // this.scrollLokasi.current && $('html, body').animate({scrollTop: this.scrollLokasi.current.offsetTop}, 2000)
  }

  _handleClickGaleri = () => {
    if (this.scrollGaleri.current) {
      window.scrollTo({top: this.scrollGaleri.current.offsetTop, behavior: "smooth"})
    }
    // this.scrollGaleri.current && $('html, body').animate({scrollTop: this.scrollGaleri.current.offsetTop}, 2000)
  }
}