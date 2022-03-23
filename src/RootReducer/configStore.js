import { combineReducers, createStore } from 'redux'

import {gameOanTuTiReducer} from './OanTuTiReducer'

const rootReducer = combineReducers({
    gameOanTuTiReducer,
})

export const store = createStore(rootReducer)