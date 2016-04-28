import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DoTheThing } from '../actions/do_the_thing';
import { ImgurLookup } from '../actions/imgur_lookup';
import { SelectAPI } from '../actions/select_api'

class SearchBar extends Component {

	constructor(props){
		super(props);

		this.state = { 
			term: '',
			api: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.pickAPI = this.pickAPI.bind(this);

	}

	onInputChange(event){
		this.setState({
			term : event.target.value
		})
	}

	onFormSubmit(event){
		console.log('event')
		alert('Click a button to choose seach an API.')

		event.preventDefault();

		
	}

	pickAPI(event){
		console.log('pickSpotify', event.target.innerHTML)
		const api = event.target.innerHTML;
		if (api === 'Spotify API'){
			this.props.GoDoTheThing(this.state.term);
			this.props.GoDoSelectAPI('spotify');
		} else if (api === 'Imgur API'){
			this.props.GoImgurLookup(this.state.term);
			this.props.GoDoSelectAPI('imgur');
		}
	}

	showButtons(){
		let spotifyButton = 'spotify-button';	
		let imgurButton = 'imgur-button';

		if(this.props.selected_api === 'spotify'){
			spotifyButton = 'spotify-button selected';
			imgurButton = 'imgur-button';
		} else if (this.props.selected_api === 'imgur') {
			imgurButton = 'imgur-button selected';
			spotifyButton = 'spotify-button';
		}

		return (
			<div className="button-wrapper">
				<div className={spotifyButton} onClick={this.pickAPI}>Spotify API</div>
				<div className={imgurButton} onClick={this.pickAPI}>Imgur API</div>
			</div>
		)
	}

	render(){

		return (
			<div className="form-wrapper">
				<form onSubmit={this.onFormSubmit}>
					<input 
						type="text" 
						placeholder="enter an artist name"
						value={this.state.term}
						onChange={this.onInputChange}
						/>
				</form>

				{this.showButtons()}
				

			</div>
		
	
		)
	}
}

function mapStateToProps({ selected_api }){
	return { selected_api };
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ GoDoTheThing: DoTheThing, GoImgurLookup: ImgurLookup, GoDoSelectAPI: SelectAPI }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);


