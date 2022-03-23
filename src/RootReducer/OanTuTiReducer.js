let gameOanTuTi = {
    banChon: '',
    imgChon: './img/OanTuTi/1.png',
    imgRandom: './img/OanTuTi/2.png',
    soVanThang: 0,
    soVanHoa: 0,
    soVanThua: 0,
    soVanChoi: 0,
    mangLuaChon: [
        { hinh: './img/OanTuTi/1.png', chonLua: 'Kéo', diem: 1 },
        { hinh: './img/OanTuTi/2.png', chonLua: 'Búa', diem: 2 },
        { hinh: './img/OanTuTi/3.png', chonLua: 'Bao', diem: 3 }
    ]
}

export const gameOanTuTiReducer = (state = gameOanTuTi, action) => {
    switch (action.type) {
        case 'LUA_CHON': {
            state.banChon = action.chon;
            state.imgChon = action.imgChon;
            return { ...state }
        }
        case 'PLAY_GAME': {
            let int = Math.floor(Math.random() * 3) + 1;
            let hinh = `./img/OanTuTi/${int}.png`;
            state.imgRandom = hinh;

            if ((state.banChon === 'Kéo' && int === 3) || (state.banChon === 'Búa' && int === 1) || (state.banChon === 'Bao' && int === 2)) {
                state.soVanThang++;
            } else if ((state.banChon === 'Kéo' && int === 1) || (state.banChon === 'Búa' && int === 2) || (state.banChon === 'Bao' && int === 3)) {
                state.soVanHoa++;
            } else {
                state.soVanThua++;
            }
            state.soVanChoi++;

            return { ...state }
        }
        default: return state
    }
}