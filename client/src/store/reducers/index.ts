import auth from "./isLoggedinReducer";
import dataAtm from './atmReducers'
import {combineReducers} from 'redux'
import {typeAtm,typeTrans} from './atmReducers'


export interface IRootState {
    dataAtm:{
        Atms: typeAtm[],
        Queue:typeTrans[],
        Processed:typeTrans[]
    },
    auth:{
        currentUser:string,
        token:string,
        isLoggedin:Boolean
    }
}

const rootReducer = combineReducers({
    auth,dataAtm

}) 
export default rootReducer
