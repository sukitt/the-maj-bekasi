import React, { Component } from 'react'
import {BaseUrl} from '../../services/axios'

export default class Marker extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      // <div style={{
      //   background:"#fff", 
      //   borderRadius:"50%", 
      //   width:"20px", 
      //   height:"20px", 
      //   border:"solid black 2px", 
      //   textAlign:"center"
      // }}>
      //   {this.props.text}
      // </div>
      <div className="text-center" style={{width:"30px", height:"30px", textAlign:"center", borderRadius:"50%", backgroundColor:"#fff"}}>
        <img src={BaseUrl + '/storage/' + this.props.icon} alt={this.props.name} />
      </div>
    )
  }
}