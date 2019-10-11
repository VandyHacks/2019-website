import React from 'react';

const data = require('../../content/main.json');

const Welcome = () => {
	return (
		<div id="welcome-position">
			<div id="welcome">
				<h2 className="header-text" id="welcome-header">
					Welcome!
				</h2>
				<div id="welcome-text">{data['description']}</div>
			</div>
		</div>
	);
};

export default Welcome;
