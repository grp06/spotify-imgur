import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class Imgur extends Component {

	constructor(props){
		super(props);

	}


	showGifs(){

		console.log('the data:', this.props.imgur_data);

		return (
			this.props.imgur_data.map(item => 
				<div>
					<img
						src={item.link}
						key={item.gifv} />
				</div>
				
				)	
			)
	}

	render(){
		console.log('inside render function')
		
		return (
			<div className="imgur-container invisible">
				<div className="title"> Imgur API Results </div>

				<div className="imgur-things">
					 {this.showGifs()}
				</div>

			</div>
		)
	}

}

function mapStateToProps({ imgur_data }){
	return { imgur_data };
}

export default connect(mapStateToProps)(Imgur)