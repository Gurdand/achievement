import React from 'react';
import './achieveList.css';

class AchieveList extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const id = e.target.id;
        this.props.onClick(id);
    }

    render() {
        return (
            <div className="menu" >
                {
                    this.props.achievements.map((data, i) =>
                        <p id={i} key={ 'key' + i } onClick={this.handleClick} >
                            { data.name } 
                        </p>
                    )
                }
            </div>
        );
    }
}

export default AchieveList;