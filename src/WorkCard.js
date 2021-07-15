import './EducationCard.css';
import React from 'react';

class WorkCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
      }
    render(){
        return(
            <div className="Card">
                <header style={{backgroundColor:this.props.headColor}}>
                    <h2>{this.props.title}</h2>
                    <h5>{this.props.time}</h5>                  
                </header>
                <p className="About">{this.props.about}</p>
            </div>
        )
    }
}

export default WorkCard;