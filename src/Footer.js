import React from 'react';
import logo from './images/logo.jpg'
function Footer(){
    return(

        <div className="footer-dark  mt-5 pt-3">
            <footer>
                
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            {/* <h5 style={{color: "#00134d"}}>Services</h5> */}
                            <ul>
                                <li><a href="lllllll"  style={{color: "#00134d"}}><b>Booking</b></a></li>
                                <li><a href="kkkkkkkk"  style={{color: "#00134d"}}><b>Destinations</b></a></li>
                                
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h5 style={{color: "#00134d"}}><b>About </b></h5>
                          
                        </div>
                        <div className="col-md-6 item text">
                            <h5 style={{color: "#00134d"}}><b>Dream Destination</b></h5>
                            <img src={logo} alt="logo 50x50.png" style={{width: '100px', height: "57px"}}/>
                            
                        </div>
                        <div className="col item social" id="contacts">
                        {/* <a href="kkkkkk" style={{color: "#00134d"}}><i className="fab fa-facebook px-5" aria-hidden="true"></i></a> */}
                        <a href="https://www.instagram.com/idealconstrutora04/" style={{color: "#00134d"}}><i className="fab fa-facebook  px-5"></i></a>
                        <a href="https://www.instagram.com/idealconstrutora04/" style={{color: "#00134d"}}><i className="fab fa-instagram  px-5"></i></a>
                        <a href="https://www.google.com/maps/search/Av.Pedro+de+Castro+Van-Dunem+Loy+Talatona-Luanda/@-8.8469266,13.2786311,17z" style={{color: "#00134d"}}><i class="fas fa-map-marker-alt  px-5"></i></a>
                        <a href="mailto:rufarochiuta@gmail.com" target="blank" style={{color: "#00134d"}}><i className="fas fa-envelope  px-5" aria-disabled="false"></i></a>
                        <a href="tel:+213 555 151 491" style={{color: "#00134d"}}><i className="fa fa-phone myphone  px-5"></i></a>
                        {/* <a href="tel:+244 931 204 339" style={{color: "#00134d"}}><i className="fa-solid fa-phone  px-5"  aria-hidden="true"></i></a> */}
                        </div>
                    </div>
                    <p className="copyright" style={{color: "#00134d"}}>Dream Destination © 2023</p>
                
            </footer>
        </div>
    );}

    export default Footer;