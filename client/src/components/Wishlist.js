import React, {useEffect, useState} from 'react';
import AuthService from '../Services/AuthService';
import LocalItem from './LocalItem';






const Wishlist = () => {

    const [eventDetails, setEventDetails] = useState([]);
    const [ok, setOk] = useState(false);

    useEffect(()=>{
        wishListEvents();
    },[]);


    const wishListEvents = async () => {
        const data = await AuthService.getEvents();
        const events = data.events;
        setEventDetails(events);
        setOk(true);
    }


    const getWishListItem = () => {
        return eventDetails.map((e)=>{
                return <LocalItem
                    key={e.id}
                    db_id={e._id}
                    date= {e.date}
                    time={e.time}
                    title={e.title}
                    description={e.description}
                    from={e.from}
                    url={e.url}
                    name={e.name}
                    address={e.address}
                    id={e.id}
                />
            })



    }



    return (
        <div className="container" style={{'marginTop':'50px', 'marginBottom':'560px'}}>
            {ok ? getWishListItem() : "Loading...."}
        </div>

    );

}


export default Wishlist;



// import React, {useEffect} from 'react';
// import M from "materialize-css";


// const deleteEvent = (eventDetails) => {
//     console.log("deleted item");
// }

// const WishListItem = ({date, time, from, url, description, title, name, address, id}) => {
//     useEffect(()=>{
//         M.AutoInit();
//     },[]);


//     return (
//         <div className="row">
//             <div className="col s12 m7 l10 ">
//                 <div className="card horizontal hoverable">
//                 <div className="card-stacked">
//                     <div className="card-content">
//                     <p><span className="cdate">{date}</span><span className="ctime">{time==="00:00:00" ? "Timing Not Confirmed" : time}</span></p>
//                     <p className="ctitle">{title}</p>
//                     <p className="cdescription">{description===undefined || description==="" ? "Click on got to event for more Details" : description}</p>
//                     <p className="cname">{name}</p>
//                     {/* {address === "" ? "" : <p>Venue Address :</p>} */}
//                     <p className="caddress">{address}</p>
//                     <p className="cfrom">From {from}</p>
//                     </div>
//                     <div className="card-action">
//                     <a href={url} className="btn waves-effect waves-light white-text" style={{'backgroundColor':'#3399ff'}}>Go to event</a>
//                     <i className="material-icons right i1 tooltipped" data-position="bottom"  data-tooltip="Add To wishlist" onClick={() => deleteEvent()}>favorite_border</i>
//                     <i className="material-icons right i2 tooltipped" data-position="bottom" data-tooltip="Share">share</i>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     );

// }


// export default WishListItem;
