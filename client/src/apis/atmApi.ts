import axios from 'axios'
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { IRootState } from '../store/reducers'
const token = localStorage.getItem('Token')
const headers = {Authorization: `bearer ${token}`}
axios.defaults.headers.common['Authorization'] = `Bearer ${token}` 

//List atm item
const ListAtm = async ()=>{
    const listAtm = await axios.get('http://localhost:9999/api/atm/listItem')
    return listAtm.data.atm
}


//List queue
async function ListQueue(){
    const listQueue = await axios.get('http://localhost:9999/api/atm/queue')
    return listQueue.data.queue
}


//List processdClient
async function ListProcessed(){
    const listProcessed = await axios.get('http://localhost:9999/api/atm/transaction')
    return listProcessed.data.processedClient
}


//Create new atm
async function createAtm(input:string){
    await axios.post('http://localhost:9999/api/atm/create', {name: input,headers:headers})

}
    

//Delete atm
async function deleteAtm(idAtm:string){
    const result = await axios.delete(`http://localhost:9999/api/atm/delete/${idAtm}`)
}

    
//Create transaction
async function createTransaction(name:string,trans:string){
    await axios.post('http://localhost:9999/api/atm/createTransaction',{namePeople: name, transaction:trans}) 
}

    
export {ListAtm,ListQueue,ListProcessed,createAtm,deleteAtm,createTransaction}