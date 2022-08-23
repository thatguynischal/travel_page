import{TiLocation} from 'react-icons/ti'

export default function Card(props){
    return(
        <div className='card'>
            <img src ={props.item.img} className="card__image" />
            <div className='card__right'>
                <div className='name__logo'>
                <TiLocation className='loco' />
                <p1 className='japan'>{props.item.location}</p1>
                <p2 className='google'><u>View on Google Maps</u></p2>
                </div>
            <h1>{props.item.title}</h1>
            <div className='start'>{props.item.startDate} - {props.item.endDate}</div>
            <p className='discription'>{props.item.description}</p>
            </div>
        </div>
        )
}
