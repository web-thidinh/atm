import {useDispatch, useSelector} from 'react-redux'
import {Modal,Button,Form} from 'react-bootstrap'
import { IRootState } from '../store/reducers'
import { useState } from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom';
import {getAtms,getQueue} from '../store/actions/atmAction'
import {ListAtm, ListQueue,createAtm,createTransaction} from '../apis/atmApi'
import { logOut } from '../store/actions/isLoggedInAction';


export default function Header(){

    const history = useHistory()
    const dispatch = useDispatch()
    const currentUser = localStorage.getItem('User')
    const user = useSelector((state: IRootState)=>{
        console.log(state)
        return state.auth.currentUser
    })
    const token = useSelector((state: IRootState)=>{
        return state.auth.token
    })
    const [show, setShow] = useState(false);
    const [name,setName] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = ()=>{alert('Submit')};

    const [name1,setName1] = useState('')
    const [trans,setTrans] = useState('1')
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return(
        <div className="header-page">
            <div>
                <Button className="create-btn create-atm" variant="primary" onClick={handleShow}>Add New ATM</Button>
                <Button className="create-btn create-user" variant="primary" onClick={handleShow1}>Add New Transaction</Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Atm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form id='form-create-atm'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Input Atm Name</Form.Label>
                                <Form.Control type="text" name="name" value={name} onChange={(e)=>(setName(e.target.value))}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                        Close
                        </Button>
                        <Button form="form-create-atm" type="button" 
                            onClick={async ()=>{
                                await createAtm(name)
                                const data = await ListAtm()
                                dispatch(getAtms(data))
                                setName('')
                                handleClose()
                            }} 
                            variant="primary">
                        Add
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Create Transaction */}
                <Modal show={show1} onHide={handleClose1}>
                    <Modal.Header closeButton>
                    <Modal.Title>Create Transaction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form id="create-transaction">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name1} onChange={(e)=>(setName1(e.target.value))}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Transaction</Form.Label>
                            <Form.Control type="text" value={trans} onChange={(e)=>(setTrans(e.target.value))}/>
                        </Form.Group>
                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose1}>
                        Close
                    </Button>
                    <Button form="create-transaction" type="button" variant="primary" 
                        onClick = {
                            async ()=>{
                                await createTransaction(name1,trans)
                                await ListQueue()
                                .then((data)=>{
                                    dispatch(getQueue(data))
                                })
                                setTrans('')
                                handleClose1()
                            }
                        }>
                        Create
                    </Button>
                    </Modal.Footer>
                </Modal>


            </div>
            <div className="header-page-right">
                { currentUser ? 
                (
                    <Button>
                    {currentUser}
                    <i className="header-page-icon fas fa-sort-down"></i>
                </Button>
                ) : (
                    <Button>
                        None user logged in.
                        <i className="header-page-icon fas fa-sort-down"></i>
                    </Button>
                )
                }
                <Button className="logout-btn" variant="primary" 
                    onClick={()=>{
                        localStorage.removeItem('User')
                        localStorage.removeItem('Token')
                        dispatch(logOut())
                        history.push('/login')
                }}>Logout</Button>
            </div>
            
        </div>
    )
}