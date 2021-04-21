import React, {Component} from 'react';

class Error extends Component{
	constructor(props){
		super(props);
		this.state={
			hasError :false
		}
	}
	render(){
		if (this.state.hasError) {
			return <h1> Wooooooooooooooooooooo We have Errror </h1>
		}
		return this.props.children
	}
}
export default Error;