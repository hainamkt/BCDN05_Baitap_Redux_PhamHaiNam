import React, { Component } from 'react'

import { connect } from 'react-redux'

class DatCuoc extends Component {
  render() {
    let { imgChon, imgRandom } = this.props.cacLuaChon;
    return (
      <div className='row mb-4'>
        <div className="col item">
          <img src={imgChon} alt="" />
        </div>
        <div className="col text">I'm Iron Man, i love you 3000...!!</div>
        <div className="col item">
          <img src={imgRandom} alt="" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    cacLuaChon: rootReducer.gameOanTuTiReducer
  }
}

export default connect(mapStateToProps)(DatCuoc)