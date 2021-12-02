import axios from 'axios'
import {useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom';
import {isLoggedinAction} from '../store/actions/isLoggedInAction'

export interface DataType{
    useremail: string
    userpassword: string
}

async function HandleLogin(input:DataType){
    try{
        const result = await axios.post('http://localhost:9999/api/user/login',input)
        return result.data
    }
    catch(error){
        console.log('error')
    }
}

function HandleRegister(input:DataType){
    try{
        axios.post('http://localhost:9999/api/user/register',input)
        }
    catch(error){
        console.log('error')    
        }
}

    
export {HandleRegister,HandleLogin}


