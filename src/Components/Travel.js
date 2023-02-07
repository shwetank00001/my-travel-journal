import React from 'react'

export default function Travel(props){
  return (

    <div className='div-main'>
        <div className='div-img'>
            <img src={props.image} alt='city-image'/>
        </div>

        <div className='div-secondary'>
            <div className='div-header'>
                <p className='div-location'>{props.location}</p>
                <p><a href={props.maps} target="_blank" className='div-map'>View On Google Maps</a> </p> 
            </div>
                <h1>{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>

        </div>
    </div>
  )
}

