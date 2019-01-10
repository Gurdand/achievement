import React from 'react';
import './menu.css';
import logo from './flag.png';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const id = e.target.id;
        this.props.onClick(id);
    }

    render() {
        return(
            <div className="main-background" >
                <div className="main-menu" >
                    <img className="main-logo" src={ logo } alt="logo" />
                    <h1>Меню</h1>
                    <p>World Bosses Timer (В разработке)</p>
                    <p id="pazzle" onClick={this.handleClick} >Achievements Jumping Pazzles</p>
                    <p>Coming Soon</p>
                    <p>Coming Soon</p>
                </div>
            </div>
        )
    }
}

export default Menu;