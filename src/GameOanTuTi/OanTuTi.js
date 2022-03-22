import React, { Component } from 'react'
import DatCuoc from './DatCuoc'
import KetQua from './KetQua'
import '../GameOanTuTi/OanTuTi.css'

export default class OanTuTi extends Component {
  render() {
    return (
      <div className='container-fluid GameOanTuTi'>
          <h1>Phạm Hải Nam</h1>
          <DatCuoc/>
          <KetQua/>
      </div>
    )
  }
}
