import React from "react";

export default function Entry(props){
  return (
      <div className="entry-card">
        <img src={`${props.location.imageUrl}`} alt={`${props.location.title}`}/>

        <div className="info">

          <div className="top-line">
              <p className="location"> 
                <img src="./img/location.png" alt="location-icon" /> 
              {props.location.location}
              </p>
              <a href={`${props.location.googleMapsUrl}`}>View on Google Maps</a>
          </div>
          
          <h2>{props.location.title}</h2>
          <p><strong>{props.location.startDate} - {props.location.endDate}</strong></p>
          <p>{props.location.description}</p>
        </div>
      </div>
  )
}