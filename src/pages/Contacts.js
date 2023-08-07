import React from 'react';

 function Contact(){
    return(

        <div className=" mt-5  p-5" id="form">
        <center> <p style={{color: "blue" ,font: "1em sans-serif;"}} ><strong><h3> Get intouch with us </h3></strong></p>
        </center>

             <div className="row pt-3">
                 <div className="col-sm-12" id="contacts">
                     <a href="https://www.google.com/maps/search/Av.Pedro+de+Castro+Van-Dunem+Loy+Talatona-Luanda/@-8.8469266,13.2786311,17z" style={{color: "rgb(3, 2, 77)"}}><i class="fas fa-map-marker-alt"></i></a>
                     <p  style={{color: "rgb(3, 2, 77)"}}>Av.Pedro de Castro Van-Dunem Loy<br/> Talatona-Luanda</p>
                 </div>
             </div>
 
             <div className="row pt-3">
                 <div className="col-sm-12" id="contacts">
                     <a href="tel:+244 931 204 339"  style={{color: "rgb(3, 2, 77)"}}><i className="fa fa-phone myphone" ></i></a>
                     <p  style={{color: "rgb(3, 2, 77)"}}>+244 931 204 339</p>
                 </div>
             </div>
 
             <div className="row pt-3">
                 <div className="col-sm-12" id="contacts">
                     <a href="mailto:idealconstrutora04@gmail.com" target="blank"  style={{color: "rgb(3, 2, 77)"}}><i className="fas fa-envelope"></i></a>
                     <p  style={{color: "rgb(3, 2, 77)"}}>dreamdestinations@gmail.com</p>
                 </div>
             </div>
 
             <div className="row pt-3">
                 <div className="col-sm-12" id="contacts">
                     <a href="https://www.facebook.com/idealconstrutora04"  style={{color: "rgb(3, 2, 77)"}}><i className="fab fa-facebook"></i></a>
                     <p  style={{color: "rgb(3, 2, 77)"}}>Dream Destinations</p>
                 </div>
             </div>
 
             <div className="row pt-3">
                 <div className="col-sm-12" id="contacts">
                     <a href="https://www.instagram.com/idealconstrutora04/" style={{color: "rgb(3, 2, 77)"}}><i className="fab fa-instagram"></i></a>
                     <p  style={{color: "rgb(3, 2, 77)"}}>@dreamdestinations</p>
                 </div>
             </div>
         
        

     </div>

    );
}
export default Contact