import AtmItem from './AtmItem'
import {useEffect} from 'react'
import '../App.css'
import { IRootState } from '../store/reducers'
import {Row,Button} from 'react-bootstrap'
import {useSelector, useDispatch } from 'react-redux';
import { typeAtm } from '../store/reducers/atmReducers'
import {ListAtm,ListQueue,ListProcessed} from '../apis/atmApi'
import {getAtms,getQueue,getProcessed} from '../store/actions/atmAction'
import { Redirect } from 'react-router-dom'


export default function Atm(){
    const auth = useSelector((state:IRootState)=>{
        return state.auth.isLoggedin 
      })
    const dispatch = useDispatch()
    useEffect(()=>{
        auth?
        (setInterval(()=>{
            ListAtm()
            .then((data)=>{              
                dispatch(getAtms(data))
            })
            ListQueue()
            .then((data)=>{
                dispatch(getQueue(data))
            })
            ListProcessed()
            .then((data)=>{
                dispatch(getProcessed(data))
            })
        },1000)):
        (<Redirect to="/login"/>)
    },[])
    const atmList = useSelector((state:IRootState)=>{
        return state.dataAtm.Atms
    })
    const processedClient = useSelector((state:IRootState)=>{
        return state.dataAtm.Processed
    })

    return(
        <div>
            <Row className="atm-list">
                {
                    atmList.map((atmItem:typeAtm,index:number)=>(
                        <AtmItem 
                            key={index} 
                            id={atmItem.id}
                            status={atmItem.status} 
                            name={atmItem.name}
                            client={atmItem.client}
                            transaction={atmItem.transaction}
                        />
                    ))
                }
            </Row>
            <Row>
                <h3>Processed Client:</h3>
                <div className="process-value">{processedClient}</div>
            </Row>
        </div>
    )
}