import './EducationCard.css';
import React from 'react';

export default function EducationCard(props){
    return(  
        <div className="Card">
            <img src={props.logo}/>
            <div className='heading'>
                <h2>{props.title}: </h2>
                <h2 className='grade-wide'>{props.grade}</h2>
            </div>
            <h2 className='grade-thin'>{props.grade}</h2>
            <div>{props.location} - {props.time}</div>
        </div>
    )

}