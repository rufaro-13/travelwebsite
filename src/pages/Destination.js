import React from 'react';
import {images} from './Objects';
import Card from 'react-bootstrap/Card';

var image =sessionStorage.getItem("clickedImage")

let obj = images.find(o => o.id ===parseInt(image));
console.log("the id is",obj);
let hotels = obj?.hotels;
let activities = obj?.activities;
let culture = obj?.culture;

function Destination(){
    return(
      <div>
        <div className='destination_div col-xs-12 centre rounded mt-3'>
          <h1>{obj.title}</h1>
        </div>
        <div className='destination_div col-xs-12 centre rounded'>
          <p /* style={{width:"50%"}} */>
            {obj.text}
          </p>
          <img
          className="d-block w-100 rounded"
          src={obj.image}
          alt="First slide"
          />
        </div>

        <div className='destination_div col-xs-12 centre rounded mt-4'>
          <h3>Hotels available</h3>
        </div>

        <div className='row'>
            <div className='mycards flex pt-2 ml-5'>
              {hotels.map((tab,index) => (
                <Card className="ml-4" key ={index}style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={tab[1]} className=" embed-responsive embed-responsive-16by9 img-thumbnail" style={{height: '50%'}}/>
                    <Card.Body>
                      <Card.Title className="cardtitle">{tab[0]}</Card.Title>
                      <Card.Text>
                      <b>Rating:</b><br/>
                      <b>Location:</b><br/>
                      <b>Price:</b>
                      </Card.Text>
                    </Card.Body>
                    
                    <Card.Body>
                      <Card.Link href="#">Visit Hotel Site</Card.Link>
                     
                    </Card.Body>
                </Card>))}
            </div>
         </div>

         <div className='destination_div col-xs-12 centre rounded mt-4'>
          <h3>Activities available</h3>
        </div>

        <div className='row'>
            <div className='mycards flex pt-2 ml-5'>
              {activities.map((tab,index) => (
                <Card className="ml-4"key ={index}style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={tab[1]} className=" embed-responsive embed-responsive-16by9 " style={{height: '75%'}} />
                    <Card.Body>
                      <Card.Title className="cardtitle">{tab[0]}</Card.Title>
                     </Card.Body>
                </Card>))}
            </div>
         </div>

         <div className='destination_div col-xs-12 centre rounded mt-4'>
          <h3>Food andCultture</h3>
        </div>

        <div className='row'>
            <div className='mycards flex pt-2 ml-5'>
              {culture.map((tab,index) => (
                <Card className="ml-4"key ={index}style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={tab} className=" embed-responsive embed-responsive-16by9 " style={{height: '100%'}}/>
                    {/* <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                    
                    <Card.Body>
                      <Card.Link href="#">Card Link</Card.Link>
                      <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body> */}
                </Card>))}
            </div>
         </div>
      </div>
    );
} 
<Destination/>
export default Destination