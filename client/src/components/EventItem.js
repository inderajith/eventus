import React from 'react';


const EventItem = ({date, imgurl, time, from, title, members}) => {
    return (
        <div className="row">
            <div className="col s12 m7 l8 ">
                <div className="card horizontal hoverable">
                <div className="card-image cimg">
                    <img  src={imgurl} />
                </div>
                <div className="card-stacked">
                    <div className="card-content">
                    <p><span className="cdate">{date}</span><span className="ctime">{time} IST</span></p>
                    <p className="ctitle">{title}</p>
                    <p className="cfrom">From {from}</p>
                    </div>
                    <div className="card-action">
                    <span className="left members">Members Attending: {members}</span>
                    <i className="material-icons right i1 tooltipped" data-position="bottom" data-tooltip="Add To wishlist">favorite_border</i>
                    <i className="material-icons right i2 tooltipped" data-position="bottom" data-tooltip="Share">share</i>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}


export default EventItem;
