import image from '../user.png'
import '../App.css'
export default function QueueItem(props:any){
    return(
        <div className="queue-item">
            <div className="queue-item-image">
                <img src={image} />
            </div>
            <div>Name:{props.name}</div>
            <div>Transaction:{props.transaction}</div>
        </div>
    )
}