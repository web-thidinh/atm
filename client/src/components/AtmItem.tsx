import '../App.css'
import image from '../atm.jpg'
import userimage from '../user.png'
import {Col} from 'react-bootstrap'
import {ListAtm,deleteAtm} from '../apis/atmApi'
import { useParams } from 'react-router-dom';
import {typeAtm} from '../store/reducers/atmReducers'
import { useDispatch } from 'react-redux'
import {getAtms} from '../store/actions/atmAction'

export default function AtmItem({id,client,name,status,transaction}:typeAtm){
    const dispatch = useDispatch()
    return(
        <Col xl={4} className="atm-item">
            <div className="atm-image"><img src={image}/>
                <div className="atm-icon" onClick={async ()=>{
                    await deleteAtm(id)
                    ListAtm()
                        .then((data) =>{
                            dispatch(getAtms(data))
                        })
                }}>
                    <i className="far fa-times-circle"></i>
                </div>
            </div>
            <div className="atm-status">{status}</div>
            <div className="atm-name">{name}</div>
            <div className="atm-user">
                <div className="atm-user-image">
                    <img src={userimage}/>
                </div>
                <div>
                    <div className="atm-client">{client}</div>
                    <div className="atm-transaction">{transaction}</div>
                </div>
            </div> 
            
        </Col>
    )
}