import React, { Component } from 'react'
import Spinner1 from './Spinner1.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Spinner1} alt="loading" />
      </div>
    )
  }
}
