import React from "react"

export default function Card(props) {
    
    return (
       
            
        <div className="card">
            
            <div className="image-container">
                <img className="card--image" src={props.imageUrl}/>
            </div>
            <div className="card--info">
                <div className="card--info__location-info">
                    <p className="location-text">
                        <i className="fa-solid fa-location-dot"></i>{props.location}
                    </p>
                    <a className="location-link" id="location-link" 
                    href={props.googleMapsUrl} 
                    target="_blank">View on Google Maps
                    </a>
                </div>
                <h2 className="card--info__title">{props.title}</h2>
                <p className="card--info__dates">{props.startDate} - {props.endDate}</p>
                <p className="card--info__description">{props.description}</p>
            </div>
        </div>
    
    )
}