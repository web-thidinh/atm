import '../App.css'
import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useHistory} from 'react-router-dom'
import {Form,Button} from 'react-bootstrap'
import {HandleLogin} from '../apis/userApi'
import {isLoggedinAction} from '../store/actions/isLoggedInAction'
import { Redirect } from 'react-router-dom'
import { IRootState } from '../store/reducers'

export default function Login(){
    const history = useHistory()
    const dispatch = useDispatch()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const data = {useremail:email,userpassword:password}
    
    return(
        <div className="login-page">
            <Form className="login-form mx-auto"> 
            <h1 className="form-heading">Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e:any)=> setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e:any)=> setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <div className="form-login-btn">
                    <Button 
                        className="login-btn" 
                        variant="success" 
                        type="button" 
                        onClick = {async ()=>{
                            const handleLoggin = await HandleLogin(data)
                            await localStorage.setItem('Token',handleLoggin.PRIVATE_TOKEN)
                            await localStorage.setItem('User',handleLoggin.user.email)
                            dispatch(isLoggedinAction(handleLoggin))
                            history.push('/home')
                        }}>
                        Login
                    </Button>
                    <Button    
                        variant="primary"  
                        type="submit"
                        onClick = {()=>{
                            history.push('/register')
                        }}
                    >
                        Register
                    </Button>
                </div>
            </Form>
        </div>
    )
}