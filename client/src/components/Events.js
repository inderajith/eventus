import React, {useState, useEffect} from 'react';
import AboutUs from './AboutUs';
import EventItem from './EventItem';
import SearchBar from './SearchBar';
// import axios from './myaxios';
import axios from 'axios';
import converter from 'xml-js';
import EventFulItem from './EventFulItem';
















const Events = ()=>{

    const [eventDetails, setEventDetails] = useState([]);
    const [ok, setOk] = useState(false);


    useEffect(async () =>  {

        let lat = "";
        let lon = "";


    navigator.geolocation.getCurrentPosition((position) => {
         lat = position.coords.latitude;
         lon = position.coords.longitude;

         axios.get('http://api.eventful.com/rest/events/search', {
            params:{
                "app_key" : "bhrbJ4rRKhmLDLck",
                // "where": "11.0168,76.9558",
                "where": `${lat},${lon}`,
                "within": "25",
            }
        })
        .then(res => {
            const result = converter.xml2json(res.data, {compact: true, spaces: 4});
            const data = JSON.parse(result);
            console.log(data);
            const events = data.search.events.event;

            events.forEach( event => {
                    const dateTime = event.start_time._text;
                    const newObj = {
                     date:dateTime.split(" ")[0],
                     time:dateTime.split(" ")[1],
                     description: event.description._text,
                     url:event.url._text,
                     venue_name:event.venue_name._text,
                     venue_address: event.venue_address._text,
                     city_name: event.city_name._text,
                     id:event._attributes.id,
                     title: event.title._text,
                     from: "Eventful"
                    };
                    setEventDetails((oldArray) => {
                        return [...oldArray, newObj];
                    });
                })

            })
            .then(() => {
                axios.get('https://api.predicthq.com/v1/events/',
        {
            headers:{
                Authorization : "Bearer DN0I7b9Yml3cyDba1Qy-xEz5jQV9FLY_rQlnu5hN"
            },
            params:{
                "within":"20km@11.0168,76.9558",
                "category":"conferences,concerts,community,festivals,performing-arts"

            }
        })
        .then(res => {
            const results = res.data.results;
                results.forEach(result => {
                    const dateTime = result.start;
                    const vname = result.entities.length == 0 ? "" : result.entities[0].name ;
                    const vaddress = result.entities.length == 0 ? "" : result.entities[0].formatted_address;
                    const newObj = {
                     date:dateTime.slice(0, 10),
                     time:dateTime.slice(11,19),
                     description: result.description,
                     url:"https://control.predicthq.com/search/events/" + result.id ,
                     name:vname,
                     address: vaddress,
                    //  city_name: result.city_name._text,
                     id:result.id,
                     title: result.title,
                     from:"PredictHQ"
                    };
                    setEventDetails((oldArray) => {
                        return [...oldArray, newObj];
                    });
                })

            setOk(true);
        })
        .catch(err => console.log(err));

            })
            .catch(err => console.log(err));



        });

    }, [])


    const fetchEvents = () => {
          return ( eventDetails.map( e => {
            return <EventFulItem date= {e.date}
                time={e.time}
                title={e.title}
                description={e.description}
                from={e.from}
                url={e.url}
                eventDetails={eventDetails}
                name={e.name}
                address={e.address}
            />
            })
          )
    }

    return(
        <div>
        <SearchBar />
        <div className="container" style={{'marginTop':'50px'}}>
        { ok ? fetchEvents() : <h1>Loading...</h1>}
        {/* <EventItem date="Fri, Nov 27, 2020"
                    time="12:00 AM"
                    title="Future of Food and Agriculture"
                    imgurl="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F114510329%2F43820976534%2F1%2Foriginal.20201013-135940?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C800%2C400&s=9276a29e29268aaca8ff93c5a62128c3"
                    from="Eventbrite"
                    members="06"
                    /> */}
        </div>
        </div>
    );
}

export default Events;

