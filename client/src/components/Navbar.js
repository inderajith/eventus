import React , {useContext} from 'react';
import {Link} from 'react-router-dom';
import AuthService from '../Services/AuthService';
import {AuthContext} from '../Context/AuthContext';


const Navbar = () => {

    const {isAuthenticated,user,setIsAutheticated, setUser} = useContext(AuthContext);

    const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if(data.sucess){
                setUser(data.user);
                setIsAutheticated(false);

            }
        })
    }

    const unauthenticatedNavBar = () => {
        return(
            <>
            <li>
            <Link to="/" style={{'color':'#3399ff'}}>
                Home
            </Link>
            </li>
            <li>
            <Link to="/login" style={{'color':'#3399ff'}}>
                login
            </Link>
            </li>
            <li>
            <Link to="/register" style={{'color':'#3399ff'}}>
                register
            </Link>
            </li>

            </>
        );

    }


    const authenticatedNavBar = () => {
        return(
            <>
                <li >
                    <Link to="/" style={{'color':'#3399ff'}}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/events" style={{'color':'#3399ff'}}>
                        events
                    </Link>
                </li>
                <li>
                    <Link to="/wishlist" style={{'color':'#3399ff'}}>
                        wishlists
                    </Link>
                </li>
                <li>
                <button type="button" className="btn" style={{'backgroundColor' : '#3399ff', 'color':'white', 'marginRight':'10px'}} onClick={onClickLogoutHandler}>Logout</button>
                </li>
                <li>
                    <i className="medium material-icons grey-text ">account_circle</i>
                </li>


            </>
        );
    }

    return(
        <nav>
            <div className="nav-wrapper" style={{'backgroundColor': '#fff' }}>
            <Link to="/">
                <div className="brand-logo" style={{'color':'#3399ff'}}>Eventus</div>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;
