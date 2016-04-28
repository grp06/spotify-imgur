import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Spotify from '../containers/spotify';
import Imgur from '../containers/imgur'


class ApiContainer extends Component {

	render(){
		console.log('state of selected_api' + this.props.selected_api)
		if(this.props.selected_api === 'spotify'){
			
			return (
				<Spotify />
			)
		} else if (this.props.selected_api === 'imgur') {
			return (
				<Imgur />
			)
		} else {
			return(
				<div className="get-started">Type in a search term and select an API to ping!</div>
			)
		}
	}
}

function mapStateToProps({ selected_api }){
	return { selected_api };
}

export default connect(mapStateToProps)(ApiContainer)