import Carousel from 'react-bootstrap/Carousel';
//import mountain from './mountain.jpg'
import vacation from './vacation.jpg'
//import safari from './safari.jpg'
import jumbo from '../images/victoria_falls_1.jpg'
import jumbo1 from '../images/hindu-temple-where-to-go-in-bali.jpg'
//import {images} from './Objects'
//import {useState} from 'react'


/* localStorage.setItem("img_table",images);
window.location.href="Destination.js"; */

function CarouselSec(){

//const [isClicked, setIsClicked] = useState(false);
return(
 <div>
      
        <div className='carouseldiv pt-3 mx-5 mt-2 rounded'>
        
        
        <div id="mycarousel" className='col-xs-12 centre rounded'>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src={jumbo}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 style={{color: "red"}}>Promotion</h3>
                  <p className="lead" style={{color: "yellow"}}>Summer is coming, so visit 
                               your dream destinations
                               with 30% off.<br/> Use code SUMVAC23</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src={jumbo1}
                  alt="Second slide"
                />
        
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 rounded"
                  src={vacation}
                  alt="Third slide"
                />
        
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
        </div>
        </div>
  </div>
    );
  }

  export default CarouselSec;