import { combineReducers, createStore } from 'redux'

const RootReducer = combineReducers({
    // oanTuTiReducer:(state) =>{
    //     return state
    // }
})

export const store = createStore(RootReducer)