import React, {Component} from 'react';

import CardMaker from './CardMaker';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

import '../styles/app.css';

class App extends Component{
	constructor(){
		super()
		this.state={
			robots: [],
			searchfield: '',
		}
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then( users => this.setState({robots: users}))
	}
	render(){
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(
			robots => {
				return robots.name.toLowerCase().includes(searchfield.toLowerCase());
			}
		)
		return !robots.length ? <h1 className="f1 tc"> Loading </h1> :
		(
			<div className = 'tc' >
				<h1 className="f1"> RoboFriends </h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardMaker robots={ filteredRobots }/>
				</Scroll>
			</div>
		);		
	}
}
export default App;