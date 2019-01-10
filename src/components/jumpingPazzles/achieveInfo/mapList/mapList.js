import React from 'react';
import './mapList.css';

class MapList extends React.Component {
    render() {
        const str = "maps/" +this.props.name.replace(/ /g, "_") + '_map.jpg';
        return (
            <div className="map">
                <img src={str} alt="map" />
            </div>
        )
    }
}

export default MapList;