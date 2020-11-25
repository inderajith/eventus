import React from 'react';

const AboutUs = ()=>{
    return(
        <div className="amain">
            <div className="container">
                <div className="row">
                    <div className="col s4 l3">
                        <h5>Use EventUse</h5>
                        <ul>
                            <li>Event Blog</li>
                            <li>How it works</li>
                        </ul>
                    </div>
                    <div className="col s4 l3">
                        <h5>Find Events</h5>
                        <ul>
                            <li>Browse online events </li>
                            <li>Get EventUs App</li>
                        </ul>
                    </div>
                    <div className="col s4 l3">
                        <h5>For ur Queries</h5>
                        <ul>
                            <li>Help Center</li>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Community Guideliness</li>
                        </ul>
                    </div>
                    <div className="col s4 l3">
                        <h5>Connect with us</h5>
                        <ul>
                            <li><i className="fab fa-2x fa-facebook-square left"></i><p>Facebook</p></li>
                            <li><i className="fab fa-2x fa-twitter-square left"></i><p>Twitter</p></li>
                            <li><i className="fab fa-2x fa-google-plus-square left"></i><p>Google</p></li>
                            <li><i className="fab fa-2x fa-instagram left"></i><p>Instagram</p></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    &copy;<span>2020 eventus</span>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
