import React, {Component} from 'react';
import { connect } from 'react-redux';

import CardMaker from '../components/CardMaker';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Error from '../components/Error';
// import robots from '../components/robots.js';

import { setSearchField, runRequestRobots } from  '../actions'

import './app.css';

const mapStateToProps = (state) =>{
	return {
		searchField: state.searchRobots.searchField,
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange : (event) =>dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(runRequestRobots())
	}
}

class App extends Component{
	componentDidMount(){
		this.props.onRequestRobots()
	}
	render(){
		const {searchField, onSearchChange, robots, isPending} = this.props;
		const filteredRobots = robots.filter(
			robot => {
				return robot.name.toLowerCase().includes(searchField.toLowerCase());
			}
		)
		return isPending ? <h1 className="f1 tc"> Loading </h1> :
		(
			<div className = 'tc' >
				<h1 className="f1"> RoboFriends </h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<Error>
						<CardMaker robots={ filteredRobots }/>
					</Error>
				</Scroll>
			</div>
		);		
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);