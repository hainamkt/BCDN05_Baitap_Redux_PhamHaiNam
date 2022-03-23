import React, { Component } from 'react'

import { connect } from 'react-redux'

class KetQua extends Component {
  renderLuaChon = () => {
    let { mangLuaChon } = this.props.cacLuaChon
    return mangLuaChon.map((luaChon) => {
      return (
        <div className="col" key={`luaChon${luaChon.chonLua}`}>
          <button className='btn btn-info' onClick={() => {
            let action = {
              type: 'LUA_CHON',
              chon: luaChon.chonLua,
              imgChon: luaChon.hinh
            }
            this.props.dispatch(action)
          }}>
            <img src={luaChon.hinh} alt="" />
          </button>
        </div>
      )
    })
  }

  render() {
    let { banChon, soVanThang, soVanChoi, soVanHoa, soVanThua } = this.props.cacLuaChon
    return (
      <div className='row'>
        <div className="col">
          <img src="./img/OanTuTi/player.png" alt="" />
          <div className="row pt-4 mx-5 luaChon">
            {this.renderLuaChon()}
          </div>
        </div>
        <div className="col">
          <p>Bạn chọn: <span className='pl-2'>{banChon}</span></p>
          <p>Số ván thắng: <span className='pl-2'>{soVanThang}</span></p>
          <p>Số ván hòa: <span className='pl-2'>{soVanHoa}</span></p>
          <p>Số ván thua: <span className='pl-2'>{soVanThua}</span></p>
          <p>Số ván chơi: <span className='pl-2'>{soVanChoi}</span> </p>
          <button className='btn btn-success mt-3' onClick={() => {
            let action = {
              type: 'PLAY_GAME'
            }
            this.props.dispatch(action)
          }}>PLAY GAME</button>
        </div>
        <div className="col">
          <img src="./img/OanTuTi/playerComputer.png" alt="" />
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

export default connect(mapStateToProps)(KetQua)
