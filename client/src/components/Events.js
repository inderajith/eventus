import React from 'react';
import AboutUs from './AboutUs';
import EventItem from './EventItem';
import SearchBar from './SearchBar';

const Events = ()=>{
    return(
        <div>
        <SearchBar />
        <div className="container" style={{'marginTop':'50px'}}>
        <EventItem date="Fri, Nov 27, 2020"
                    time="12:00 AM"
                    title="Future of Food and Agriculture"
                    imgurl="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F114510329%2F43820976534%2F1%2Foriginal.20201013-135940?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C800%2C400&s=9276a29e29268aaca8ff93c5a62128c3"
                    from="Eventbrite"
                    members="06"
                    />

        <EventItem date="Fri, Nov 27, 2020"
                    time="12:00 AM"
                    title="TEDxSeattle 2020"
                    imgurl="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F106803618%2F460040562648%2F1%2Foriginal.20200723-051136?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C16%2C1724%2C862&s=d5d18661d593a1fec00baf219ee2331b"
                    from="Meetup"
                    members="14"
                    />


        </div>

        </div>
    );
}

export default Events;

