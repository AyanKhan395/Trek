import Navbar from "../Navbar"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import TreksData from "../json/trekData.json"
import React, { useState } from 'react';

const Treks = ( { setLoginUser } ) => {
  
  const [ inputText, setInputText ] = useState('');
  
  const handleInputText = (value) => {
    // setInputText( ( prev ) => ( { ...prev, inputText: value } ) );
    setInputText( value );
    console.log( inputText );
  };
  
  return ( <div>
    <Navbar setLoginUser={setLoginUser} />
    {/* <h1 style={{ marginTop: "100px" }}>Treks</h1> */}
    

      <section className="packages" id="packages" style={{ marginTop: "70px" }}>

      <h1 className="heading">Popular Treks</h1>
       <section className="newsletter">

        <div className="content">
          <form action="">
                  <input type="email" name="" placeholder="Search Treks" id="" value={inputText} onChange={(e) => handleInputText(e.target.value)} className="email"></input>
                  <div className="btn"><i className="fas fa-search"></i></div>
              </form>
          </div>

      </section> 
      <div className="box-container">
        {
          TreksData && TreksData.map( data => {
            if ( data.title.toLowerCase().indexOf( inputText.toLowerCase() ) > -1 )
            {
              return (
                <div className="box">
                  <div key={data.id}>
                    <div className="image">
                      <img src={data.image} />
                      {/* <img src="images/img-1.jpg" alt=""> */}
                    </div>
                    <div className="content">
                      <h3>{data.title}</h3>
                      <p>{data.description}</p>
                      <div className="price">{data.price}</div>
                      <a href="#" className="btn">Continue</a>
                    </div>
                  </div>
                </div>
              )
            }
          } )
        }
          </div>
      </section>
    
    
    
  </div> )
}

export default Treks