import React from 'react';

function About(){
    return(
        <div className='mt-2'>

            <div style={{backgroundColor:"Gainsboro"}}>
            <div className='about'><h2 className='center mt-3'> <b>Dream Destinations </b></h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat magna nibh, eu posuere magna eleifend blandit.
                     Nam id aliquet neque. Vestibulum nibh erat, lobortis ac nulla eu, lacinia posuere nulla. Mauris augue justo, ultricies 
                     vitae molestie tincidunt, euismod eu mi. In tincidunt vehicula neque vel bibendum. Quisque condimentum dolor eu aliquam 
                     malesuada. Proin vitae pharetra risus, eget cursus velit. Ut ut efficitur ligula. Quisque mattis risus at tempor blandit.
                      Nulla vestibulum augue in metus vestibulum, semper laoreet urna facilisis. Fusce a leo quam. Sed a laoreet lacus. 
                      
                </p></div>
               <div className='about'><h2 className='center'>  <b>Services </b></h2>
                        
                        <ul >
                           <li>Booking hotels on your behalf </li>
                           <li>Booking the flights of your choice</li>
                           <li>Informing you of the best packages for a memorable holiday</li>
                           <li>Helping you find the services you need in the area</li> 
                        </ul>
               </div>
                
                <div className='about'><h2 className='center'><b> Values </b></h2>
                <p>Pellentesque suscipit metus ut nunc imperdiet sollicitudin. Nunc ut turpis non purus tincidunt volutpat quis convallis
                    metus. Aliquam sed tellus interdum, dapibus nibh vel, ultrices leo. Sed eu pulvinar libero. Nullam eu aliquet leo. Donec 
                    vestibulum malesuada velit. Vestibulum efficitur hendrerit tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi 
                    pellentesque nisi non erat semper pretium.
                    </p></div>
                
            </div>

        </div>
    );
}
export default About;