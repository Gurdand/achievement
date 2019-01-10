import React, { Component } from 'react';
import Menu from './components/menu/menu';
import JumpingPazzles from './components/jumpingPazzles/jumpingPazzles';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			select: 'menu',
		}
		this.changeApp = this.changeApp.bind(this);
	}

	changeApp(value) {
		this.setState({ select: value })
	}

	render() {
		return (
			<div className="app">
				{ this.state.select === 'menu' && <Menu onClick={this.changeApp} /> }
				{ this.state.select === 'pazzle' && <JumpingPazzles onClick={this.changeApp}/> }
			</div>
		);
	}
}

export default App;
