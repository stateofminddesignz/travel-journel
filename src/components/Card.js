import React from 'react';


export default function Card(props){
     return(
      <section className='card--travel'>
      <img src={props.imageUrl} className="card--image" />
      <div className='card--discription' >      
            <div className='card--location'>
            <i class="fa-sharp fa-solid fa-location-dot"></i>
                  <span className='card--country'>{props.location}</span>
                  <a href={props.googleMapsUrl} className='card--map'  >View on Google Maps</a>
            </div>
       <h2 className='card--title' >{props.title}</h2>
       <span className="card--date">{props.startDate}-{props.endDate}</span>
      <p className='card--discription' >{props.description}</p>
                      
  
      </div>
        
      
           </section>
         
         
     )
     
     
     
     
     
 };

