import React, { Component } from 'react';
import AchieveInfo from './achieveInfo/achieveInfo';
import AchieveHeader from './achieveHeader/achieveHeader';
import AchieveList from './achieveList/achieveList';
import './jumpingPazzles.css';

const API = 'https://api.guildwars2.com/v2/achievements/categories/14';

/* 206,2126,218,217,156,200,143,158,205,151,157,369,154,172,144,145,199,197,366,155,
163,147,193,148,149,161,198,201,203,150,204,207,142,194,400,159,160,196,367,368,195,401,202,648*/

class JumpingPazzles extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			icon: "",
			achievements: [{id: 206, name: "Antre of Adjournment"}],
			achievement: {id: 206, name: "Antre of Adjournment", requirement: "req", description: "discr", tiers: [{count: 1, points: 10}] },
		}
		this.componentDidMount = this.componentDidMount.bind(this);
		this.getList = this.getList.bind(this);
		this.selectAchieve = this.selectAchieve.bind(this);
	}

	componentDidMount() {
		fetch(API).then(response => response.json())
		.then(data => this.setState({
			name: data.name, icon: data.icon, achievements: [
				this.getList(data.achievements)
		] }))
	}
	
	getList(data) {
		let obj = fetch('https://api.guildwars2.com/v2/achievements?ids=' + [ data ].reduce((a,b) => a.concat(b), [] ).join(','))
		.then(subData => subData.json()).then( dat => this.setState({ achievements: [dat].reduce((a,b) => a.concat(b), [] ) })); 
		//[dat] );
		//console.log(obj);
		return obj;
	}

	selectAchieve(newId) {
		this.setState({ achievement: this.state.achievements[newId] });
	}
	
	render() {
		//console.log(this.state.achievements);
		return (
			<div className="JumpingPazzles">
				<AchieveHeader icon={ this.state.icon } title={ this.state.name } onClick={this.props.onClick} />
				<div className="main">
					<AchieveList achievements={this.state.achievements} onClick={this.selectAchieve} />
					<AchieveInfo achievement={this.state.achievement} icon={ this.state.icon } />
				</div>
			</div>
		);
	}
}

export default JumpingPazzles;
