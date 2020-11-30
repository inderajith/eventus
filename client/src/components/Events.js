import React, {useState, useEffect} from 'react';
import AboutUs from './AboutUs';
import EventItem from './EventItem';
import SearchBar from './SearchBar';
// import axios from './myaxios';
import axios from 'axios';
import converter from 'xml-js';
import EventFulItem from './EventFulItem';
import Loader from './Loader';
















const Events = (props)=>{

    const [eventDetails, setEventDetails] = useState([]);
    const [ok, setOk] = useState(false);
    const [mydate, setMydate] = useState("2020120100-2021122500");
    const [myDate1, setMyDate1] = useState("2020-12-01");
    const [myDate2, setMyDate2] = useState("2021-12-25");
    const [category, setCategory] = useState("conferences,concerts,community,festivals,performing-arts");
    const [lat, setLat] = useState('');
    const [lon, setLon] = useState('');
    // const [keywords, setKeywords] = useState("");


    useEffect(async () =>  {
    navigator.geolocation.getCurrentPosition((position) => {
        let lat1 = position.coords.latitude;
        let lon1 = position.coords.longitude;

        if(lat === '')
        {
            setLat(lat1);
            setLon(lon1);
        }

         axios.get('http://api.eventful.com/rest/events/search', {
            params:{
                "app_key" : "bhrbJ4rRKhmLDLck",
                // "where": "11.0168,76.9558",
                "where": `${lat},${lon}`,
                "within": "25",
                // "keywords":"food"
                "date": mydate
            }
        })
        .then(res => {
            const result = converter.xml2json(res.data, {compact: true, spaces: 4});
            const data = JSON.parse(result);
            console.log(data);
            const events = data.search.events.event;
            setEventDetails([]);
            if(events.length !== undefined)
            {
                events.map( event => {
                    const dateTime = event.start_time._text;
                    const newObj = {
                     date:dateTime.split(" ")[0],
                     time:dateTime.split(" ")[1],
                     description: event.description._text,
                     url:event.url._text,
                     name:event.venue_name._text,
                     address: event.venue_address._text,
                    //  city_name: event.city_name._text,
                     id:event._attributes.id,
                     title: event.title._text,
                     from: "Eventful"
                    };
                    setEventDetails((oldArray) => {
                        return [...oldArray, newObj];
                    });
                })
            }
            else{
                    const dateTime = events.start_time._text;
                    const newObj = {
                     date:dateTime.split(" ")[0],
                     time:dateTime.split(" ")[1],
                     description: events.description._text,
                     url:events.url._text,
                     name:events.venue_name._text,
                     address: events.venue_address._text,
                    //  city_name: event.city_name._text,
                     id:events._attributes.id,
                     title: events.title._text,
                     from: "Eventful"
                    };
                    setEventDetails((oldArray) => {
                        return [...oldArray, newObj];
                    });
            }


            })
            .then(() => {
                axios.get('https://api.predicthq.com/v1/events/',
        {
            headers:{
                Authorization : "Bearer DN0I7b9Yml3cyDba1Qy-xEz5jQV9FLY_rQlnu5hN"
            },
            params:{
                "within":`20km@${lat},${lon}`,
                "category":category,
                "end.gte": myDate1,
                "end.lte": myDate2

            }
        })
        .then(res => {
            const results = res.data.results;
                results.map(result => {
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

    }, [mydate, myDate1, myDate2, category, lon])


    const fetchEvents = () => {

          return ( eventDetails.map( e => {
            return <EventFulItem
                key={e.id}
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
          )
    }


    const setFilters = (date, cat, loc) => {
        console.log(date);
        let newDate3 = date;
        date = date.split("-");
        let newDate4 = date[0] + "-" + date[1] + "-";
        let newDate1 = date.join("");
        newDate1 += "00";
        let newDate2 = date[0] + date[1];
        if(Number(date[2]) < 10)
        {
            newDate2 += "0" + String(Number(date[2]) + 2) +"00";
            newDate4 += "0" + String(Number(date[2]) + 2);
        }
        else{
            newDate2 += String(Number(date[2]) + 2) + "00";
            newDate4 += String(Number(date[2]) + 2);
        }
        newDate1 += "-" + newDate2;
        setMydate(newDate1);
        setMyDate1(newDate3);
        setMyDate2(newDate4);

        setCategory(cat);
        console.log(category);
        let myLoc = loc.split(",")
        setLat(myLoc[0]);
        setLon(myLoc[1]);
        console.log(lat);
        console.log(lon);

    }




    return(
        <div style={{'minHeight':'600px'}}>
        <SearchBar setFilters={setFilters} />

        <div className="container" style={{'marginTop':'50px'}}>

        { ok ? fetchEvents() : <Loader />}


        </div>
        </div>
    );
}

export default Events;

