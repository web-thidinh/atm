import Atm from './Atm'
import Queue from './Queue'
import Header from './Header'; 
import {useSelector} from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Modal,Button} from 'react-bootstrap'
import { IRootState } from '../store/reducers'
import { Redirect } from 'react-router-dom';
export default function Home(){  
    const user = useSelector((state: IRootState)=>(state.auth))
    const currentUser = localStorage.getItem('currentUser')
    return(
        <Container>
            <Header/>
            <Row>  
                <Col xl={9}>
                    <Atm/>
                </Col>
                <Col xl={3}>
                <Queue/>
                </Col>
            </Row>
        </Container>
    )
}