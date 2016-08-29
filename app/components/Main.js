// Include React 
var React = require('react');

var Main = React.createClass({

	// Here we render the function
	render: function(){

		return(

			<div className="container">
				<div className="jumbotron text-center">
					<h2><strong>New York Times Article Scrubber</strong></h2>
					<p><em>Search for and annotate articles of interest</em></p>
				</div>

				<div className="row">
					
					{/*This code will dump the correct Child Component*/}
					{this.props.children}

				</div>

			</div>
		)
	}
});

// Export the componen back for use in other files
module.exports = Main;