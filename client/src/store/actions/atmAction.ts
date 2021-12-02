interface AtmType {
    id:string,
    status:string,
    remove:Boolean,
    name:string,
    client:string,
    transaction:string
}
interface Data{
    
}

export const getAtms = (data:AtmType[])=> {
    return {
        type:'GET_LIST_ATM',
        list:data
    }
}
export const getQueue = (data:Data)=>{
    return {
        type: 'GET_QUEUE',
        allData:data
    }
}


export const getProcessed = (data:Data[])=>{
    return{
        type:'GET_PROCESSED',
        listTrans:data
    }
}
