import React, { Component } from 'react'
import DatCuoc from './DatCuoc'
import KetQua from './KetQua'
import '../GameOanTuTi/OanTuTi.css'

// Link Deloy: https://bcdn-05-baitap-redux-pham-hai-nam.vercel.app/
//             https://bcdn-05-baitap-redux-pham-hai-nam-git-master-hainamkt.vercel.app/

export default class OanTuTi extends Component {
  render() {
    return (
      <div className='container-fluid text-center GameOanTuTi'>
        <DatCuoc />
        <KetQua />
      </div>
    )
  }
}
