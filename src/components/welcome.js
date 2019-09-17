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
	margin-top: 15em;
	margin-botton: 0em;
`;

const WelcomeLogoStyle = styled.div`
	width: 30%;
	justify-content: left;
`;

// top right bottom left
//	color: #3048a1;
const WelcomeTextStyle = styled.p`
	position: relative;
	text-align: left;
	top: -19em;
	padding: 0.3em 8.7em 0em 7em;
	font-size: 1.2em;
	display: block;
	line-height: 1.5em;
`;

const WelcomeBoxStyle = styled.div`
	position: realtive;
	width: 40em;
	height: 40em;
	opacity: 1;
	margin-bottom: 0;
`;

const EraserStyle = styled.div`
	position: absolute;
	top: 21em;
	left: 84%;
	width: 6em;
	opacity: 1;
`;

const Pen2Style = styled.div`
	position: absolute;
	top: 7em;
	left: 65%;
	width: 4.5em;
	opacity: 1;
`;

const Pen3Style = styled.div`
	position: absolute;
	top: -2em;
	left: 78%;
	width: 7.5em;
	opacity: 1;
`;

// place holder for text
const welcomeText =
	'VandyHacks is back this Fall in the Music City–and it’s ready to redesign hackathons.';
const welcomeTextCont =
	'From November 1-3, hundreds of talented and creative students from across the nation will come together to learn, collaborate, and create exciting projects with the ambition to Code a Masterpiece.';
// TODO code a masterpiece bold ?

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
