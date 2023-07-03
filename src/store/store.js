import produce from "immer"
import {createStore,combineReducers} from "redux"
import { donationReducer } from "./donationsSlice"
import { itemReducer } from "./itemSlice"
import { userReducer } from "./userSlice"

const reducer=combineReducers({
    users: userReducer,
    items:itemReducer,
    donations:donationReducer,
})
export const store=createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
