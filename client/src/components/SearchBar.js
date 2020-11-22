import React, {useEffect} from 'react';
import M from "materialize-css";

const SearchBar = () => {


    useEffect(()=>{
        M.AutoInit();
    },[]);

    return(
        <div className="smain">
            <div className="container">
                <h4 className="stitle">Ready To Explore Events Near You!</h4>
                <input type="search" className="input-field browser-default sinput" placeholder="Search"></input>
                <i className="material-icons sicon">search</i>
                <div className="line"></div>
                <div className="filters">
                    <div className="row">
                        <div className="col s2 l2">
                            <p style={{'color':'white'}}>Filter by</p>
                        </div>
                        <div className="input-field col s4 l2 offset-l2">
                        <input type="text" className="datepicker" placeholder="Pick a date" />
                        </div>
                        <div className="input-field col s4 l2">
                            <select>
                                <option value="all">All</option>
                                <option value="arts">Arts</option>
                                <option value="coding">Coding</option>
                                <option value="yoga">Yoga</option>
                            </select>
                            <label className="mylabel">Category</label>
                        </div>
                        <div className="input-field col s4 l2">
                            <select>
                                <option value="all">All</option>
                                <option value="free">Free</option>
                                <option value="paid">Paid</option>
                            </select>
                            <label className="mylabel">Fees</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}





export default SearchBar;
