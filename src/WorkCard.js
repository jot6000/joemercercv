import './EducationCard.css';
import React, { useEffect, useState } from 'react';


//title
//time
//children


export default function WorkCard(props){
    const [open,setopen] = useState(false)

    let frame = React.useRef();
    let header = React.useRef();
    let hiddenContent = React.useRef(null);

    if(frame.current){
        frame.current.style.height = `${header.current.clientHeight}px`;
    }

    useEffect(()=>{
        if(open){
            frame.current.style.height = `${header.current.clientHeight + hiddenContent.current.clientHeight + 40}px`;
        }
        else{
            frame.current.style.height = `${header.current.clientHeight}px`;
        }
    },[open])

    return(
        <>
            <div className='work-card' ref={frame}>
                <header onClick={()=>setopen(!open)} ref={header}>
                    <h2>{props.title}</h2>
                    <h4>{props.time}</h4>
                </header>
                <section ref={hiddenContent}>{props.children}</section>
                
            </div>
            <div className='splitter'/>
        </>
    )
}