import React, { Component } from 'react'

export default class Marker extends Component {
  static defalutProps = {}

  render() {
    return (
      <div style={{
        background:"#fff", 
        borderRadius:"50%", 
        width:"20px", 
        height:"20px", 
        border:"solid black 2px", 
        textAlign:"center"
      }}>
        {this.props.text}
      </div>
    )
  }
}