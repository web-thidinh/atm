const initialState = {
    Atms:[],
    Queue:[],
    Processed:[]
}
export interface typeTrans{
    name:string,
    transaction:string
}
export interface typeAtm {
    id:string,
    status:string,
    name:string,
    client:string,
    transaction:string
}

interface Action{
    type:string,
    list:typeAtm[],
    listTrans:typeTrans[],
    allData:{}
}
export default function ListAtm(state = initialState ,action:Action){
    switch(action.type){
        case 'GET_LIST_ATM':
            const Atmlist = action.list
            return{
                ...state,
                Atms:Atmlist
            }
        case 'GET_QUEUE':
            const AllData = action.allData
            return{
                ...state,
                Queue: AllData
            }
        case 'GET_PROCESSED':
            const TransList = action.listTrans
            return{
                ...state,
                Processed:TransList
            }
        default:
            return state
    }
}