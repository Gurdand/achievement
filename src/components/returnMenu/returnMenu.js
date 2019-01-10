import React from 'react';
import './returnMenu.css';

class ReturnMenu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const id = e.target.id;
        this.props.onClick(id);
    }

    render() {
        return (
            <div className="return-button" >
                <button id="menu" onClick={this.handleClick} > Назад в Меню </button>
            </div>
        )
    }
}

export default ReturnMenu;