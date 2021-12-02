import '../App.css';
import {useHistory} from 'react-router-dom';
import {Form,Button} from 'react-bootstrap';
import {useState} from 'react'; 
import {HandleRegister} from '../apis/userApi'

export default function Login(){
    const history = useHistory()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const data = {useremail:email,userpassword:password}
    
    return(
        <div className="login-page">
            <Form className="login-form mx-auto"> 
                <h1 className="form-heading">Register</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>(setPassword(e.target.value))} placeholder="Password" />
                </Form.Group>
                <div className="form-login-btn">
                    <Button 
                        className="login-btn" 
                        onClick = {()=>{
                            HandleRegister(data)
                            history.push('/login')
                        }} 
                        variant="success" 
                        type="button">
                        Register
                    </Button>
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick = {()=>{
                            history.push('/login')
                        }}
                    >
                        Login
                    </Button>
                </div>
            </Form>  
        </div>
    )
}