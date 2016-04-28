import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/search_bar';
import ApiContainer from '../containers/api_container';

export default class App extends Component {
	render(){
		return(
			<div className="outside">
				<SearchBar />
				<div className="main-box">
					<ApiContainer />
				</div>
			</div>
		);
	}
}