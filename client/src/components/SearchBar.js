import React, {useEffect, useState} from 'react';
import M from "materialize-css";

const SearchBar = (props) => {

    const {setFilters} = props;

    const [formDate, setFormDate ] = useState('');
    const [formCategory, setFormCategory ] = useState('');
    const [formLocation, setFormLocation ] = useState('');

    useEffect(()=>{
        M.AutoInit();

    },[]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(formLocation);
        setFilters(formDate, formCategory, formLocation);
    }



    return(
        <div className="smain">
            <form className="container form" onSubmit={onSubmitHandler}>
                <h4 className="stitle">Ready To Explore Events Near You!</h4>
                {/* <input type="search" className="input-field browser-default sinput" placeholder="Search"></input> */}
                {/* <i className="material-icons sicon">search</i> */}
                <div className="line"></div>
                <div className="filters">
                    <div className="row">
                        <div className="col s2 l2">
                            <p style={{'color':'white'}}>Filter by</p>
                        </div>
                        <div className="input-field col s4 l2 offset-l1" >
                        <input type="date" className="sdate" placeholder="Pick a date"  onChange={(e) => setFormDate(e.target.value)} />
                        </div>
                        <div className="input-field col s4 l2 scategory">
                            <select name="category" onChange={(e) => setFormCategory(e.target.value)}>
                                <option value="conferences,concerts,community,festivals,performing-arts">All</option>
                                <option value="conferences">conferences</option>
                                <option value="festivals">festivals</option>
                                <option value="concerts">concerts</option>
                                <option value="community">community</option>
                                <option value="performing-arts">performing-arts</option>
                            </select>
                            <label className="mylabel">Category</label>
                        </div>
                        <div className="input-field col s4 l2">
                            <select name="location" className="scountry" onChange={(e) => setFormLocation(e.target.value)}>
                                <option value="11.0168,76.9558">select</option>
                                <option value="11.0168,76.9558">Coimbatore</option>
                                <option value="19.075984,72.877656">Mumbai</option>
                                <option value="37.774929,-122.419416">San Francisco</option>
                                <option value="55.755826,37.6173">Moscow</option>
                            </select>
                            <label className="mylabel">Location</label>
                        </div>
                        <div className="input-field col s4 l2">
                        <button className="btn blue-text white sbtn" typeof="submit" >Search <i className="material-icons right">search</i></button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}





export default SearchBar;
