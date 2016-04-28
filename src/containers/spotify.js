import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class Spotify extends Component {

	render(){
		const url = "https://embed.spotify.com/?uri=" + this.props.api_data.uri;
		return (
			<div className="spotify-container">
				<div className="title"> Spotify API Results</div>
				<div className="artist-name">{this.props.api_data.name}</div>
				
				<div className="music-player-container">
					<iframe src={url} 
						width="600" height="80" 
						frameBorder="0" 
						allowTransparency="true">
					</iframe>
				</div>

			</div>
		)
	}

}

function mapStateToProps({ api_data }){
	return { api_data };
}

export default connect(mapStateToProps)(Spotify)