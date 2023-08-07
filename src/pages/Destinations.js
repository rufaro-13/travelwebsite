
import {images} from './Objects'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
  
    function Destinations(){
        //const navigate = useNavigate(); 
            const handleClick = (ident) => {

              if(ident!==0)
              {sessionStorage.setItem("clickedImage",ident); 
             return ( 
          /*  navigate('/destination'); */
          window.location.href = '/destination' )}
        } ;

      return(
        
      <section>
          <div className='row'>
            <div className='destination_div col-xs-1 centre rounded mt-3'>
                <center><h3>Here are some of our destiantions</h3></center>
            </div>
            <div className='mycards flex pt-5 ml-5' >
          
                {images.map((image) => (
                
                  <Card className="ml-4" key={image.id} style={{ width: '28rem' }}>
                  <Card.Img variant="top" src={image.image} className=" embed-responsive embed-responsive-16by9 img-thumbnail" style={{height: '50%'}}/>
                  <Card.Body>
                  <Card.Title className="cardtitle">{image.title}</Card.Title>
                  <Card.Text style={{ fontSize: '13px' }}>
                      <b>Country:</b> {image.country}<br/><b>Town:</b> {image.city}
                  </Card.Text>
                  
                <Button className="card_button"variant="primary"onClick={() =>{handleClick(image.id)}}> 
                    View More
                  </Button>
                  </Card.Body>
                  </Card>
              ))}
            
            </div>
        </div>
    </section>
      );
    }
    export default Destinations;