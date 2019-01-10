import React from 'react';
import './achieveInfo.css';
import MapList from './mapList/mapList';
import PointIcon from './achieve_point.png';
import compass from './compass.png';
import { locationList } from './locationList';

class AchieveInfo extends React.Component {

    render() {
        return (
            <div className="achieve" >
                <div className="achieve-left" >
                    <img className="achieve-logo" src={ this.props.icon } alt="icon" />
                    <p className="border">Revard:</p>
                    <img className="revard" src={ PointIcon } alt="icon" />
                    <p className="big">10</p>
                    <p>Points</p>
                </div>
                <div className="achieve-right" >
                    <h2 className="border">{ this.props.achievement.name }</h2>
                    <p>Objectives:</p>
                    <p> { this.props.achievement.requirement } </p>
                    <p><i> { this.props.achievement.description } </i></p>
                    <p>Suggested Locations:</p>
                    <p className="border"><img className="compass" src={compass} alt="icon" /> 
                    {
                        locationList.get(this.props.achievement.name)
                    } 
                    </p>
                    <MapList name={this.props.achievement.name} />
                </div>
            </div>
        );
    }
}

export default AchieveInfo;