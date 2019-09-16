import React from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import WelcomeTitle from '../images/welcomeText.svg';
import WelcomeBorder from '../images/WelcomeBorder.svg';
import Eraser from '../images/stationeryEraser.svg';
import Pen2 from '../images/stationeryPen2.svg';
import Pen3 from '../images/stationeryPen3.svg';

const Container = styled.div`
	width: 100%;
	margin-top: 13em;
`;

const WelcomeLogoStyle = styled.div`
	width: 30%;
	justify-content: left;
`;

// top right bottom left
const WelcomeTextStyle = styled.p`
	position: relative;
	text-align: left;
	top: -19em;
	padding: 0.5em 7.5em 0em 6em;
	color: #3048a1;
	font-size: 1.3em;
	display: block;
	line-height: 1.5em;
`;

const WelcomeBoxStyle = styled.div`
	position: realtive;
	width: 40em;
	opacity: 1;
	margin-bottom: 0;
`;

const EraserStyle = styled.div`
	position: absolute;
	top: 21em;
	left: 52em;
	width: 5em;
	opacity: 1;
`;

const Pen2Style = styled.div`
	position: absolute;
	top: 7em;
	left: 42em;
	width: 3.5em;
	opacity: 1;
`;

const Pen3Style = styled.div`
	position: absolute;
	top: -2em;
	left: 50em;
	width: 6.5em;
	opacity: 1;
`;

// place holder for text
const welcomeText =
	'VandyHacks is back this Fall in the Music City–and it’s ready to redesign hackathons.';
const welcomeTextCont =
	'From November 1-3, hundreds of talented and creative students from across the nation will come together to learn, collaborate, and create exciting projects with the ambition to Code a Masterpiece.';

const Welcome = () => {
	return (
		<Container>
			<WelcomeLogoStyle>
				<WelcomeTitle />
			</WelcomeLogoStyle>

			<WelcomeBoxStyle>
				<WelcomeBorder />
				<WelcomeTextStyle>{welcomeText}</WelcomeTextStyle>
				<WelcomeTextStyle>{welcomeTextCont}</WelcomeTextStyle>
			</WelcomeBoxStyle>

			<EraserStyle>
				<Eraser />
			</EraserStyle>
			<Pen2Style>
				<Pen2 />
			</Pen2Style>

			<Pen3Style>
				<Pen3 />
			</Pen3Style>
		</Container>
	);
};

const WelcomeAnimated = () => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView="animated fadeInUp" // fadeInLeft, or fadeInRight
	>
		<Welcome />
	</InViewMonitor>
);

export default WelcomeAnimated;
