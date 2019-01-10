import React from 'react';
import './achieveHeader.css';
import ReturnMenu from '../../returnMenu/returnMenu';

class AchieveHeader extends React.Component {
    render() {
        return(
            <div className="header" >
                <div>
                    <img className="logo" src={this.props.icon} alt="icon" />
                </div>
                <div>
                    <h1>{ this.props.title }</h1>
                </div>
                <ReturnMenu onClick={this.props.onClick} />
            </div>
        );
    }
}

export default AchieveHeader;