import React, {useEffect} from 'react';
import M from "materialize-css";
import AuthService from '../Services/AuthService';


const deleteEvent = (id) => {
    AuthService.deleteEvent(id)
    .then((data) => alert("Successfully removed the event from wishlist"))
    .catch(err => console.log(err));
}

const LocalItem = ({date, time, from, url, description, title, name, address, id, db_id}) => {

    useEffect(()=>{
        M.AutoInit();

    },[]);


    return (
        <div className="row">
            <div className="col s12 m7 l10 ">
                <div className="card horizontal hoverable">
                <div className="card-stacked">
                    <div className="card-content">
                    <p><span className="cdate">{date}</span><span className="ctime">{time==="00:00:00" ? "Timing Not Confirmed" : time}</span></p>
                    <p className="ctitle">{title}</p>
                    <p className="cdescription">{description===undefined || description==="" ? "Click on got to event for more Details" : description}</p>
                    <p className="cname">{name}</p>
                    {/* {address === "" ? "" : <p>Venue Address :</p>} */}
                    <p className="caddress">{address}</p>
                    <p className="cfrom">From {from}</p>
                    </div>
                    <div className="card-action">
                    <a href={url} className="btn waves-effect waves-light white-text" style={{'backgroundColor':'#3399ff'}}>Go to event</a>
                    <i className="material-icons right i1 tooltipped" data-position="bottom"  data-tooltip="Remove from wishlist" onClick={() => deleteEvent(db_id)}>delete</i>
                    <i className="material-icons right i2 tooltipped" data-position="bottom" data-tooltip="Share">share</i>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );

}


export default LocalItem;
