import './EducationCard.css';
import React from 'react';

class EducationCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
      }
    render(){
        return(
            <div className="Card">
                <header style={{backgroundColor:this.props.headColor}}>
                    <div>
                        <h3>{this.props.title}</h3>
                        <div>{this.props.location}</div>
                    </div>
                    <h5>{this.props.time}</h5>                  
                </header>
                <h3 className="Grade">{this.props.grade}</h3>
            </div>
        )
    }
}

export default EducationCard;