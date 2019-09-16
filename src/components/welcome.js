import React from 'react';
import styled from 'styled-components';

import WelcomeLogo from '../images/welcomeText.svg';
import WelcomeBorder from '../images/WelcomeBorder.svg';

const Container = styled.div`
	width: 100%;
	margin: 10em 0;
`;

const WelcomeLogoStyle = styled.div`
	width: 50%;
	justify-content: left;
`;

const WelcomeTextStyle = styled.p`
	text-align: left;
	font-size: 1.5em;
	margin: 1em 0;
	color: #3048a1;
`;

const welcomeText =
	'VandyHacks is back this Fall in the Music City–and it’s ready to redesign hackathons.';
const welcomeText2 =
	'From November 1-3, hundreds of talented and creative students from across the nation will come together to learn, collaborate, and create exciting projects with the ambition to Code a Masterpiece.';

const Welcome = () => {
	return (
		<Container>
			<WelcomeLogoStyle>
				<WelcomeLogo />
			</WelcomeLogoStyle>

			<WelcomeTextStyle>{welcomeText}</WelcomeTextStyle>
			<WelcomeTextStyle>{welcomeText2}</WelcomeTextStyle>
			<WelcomeBorder></WelcomeBorder>
		</Container>
	);
};

export default Welcome;
