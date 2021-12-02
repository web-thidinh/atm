import QueueItem from './QueueItem'
import '../App.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IRootState } from '../store/reducers'
import {ListQueue} from '../apis/atmApi'
import {getQueue} from '../store/actions/atmAction'

export default function Queue(){
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     ListQueue()
    //     .then((data)=>{
    //         dispatch(getQueue(data))
    //     })
    // },[])
    const queueList = useSelector((state:IRootState)=>{
        return state.dataAtm.Queue
    })
    return (
        <div className="queue-list">
            {
                queueList.map((queueItem,index)=>(
                    <QueueItem 
                        key={index}
                        name={queueItem.name}
                        transaction={queueItem.transaction}
                    />
                ))
            }
        </div>
    )
}