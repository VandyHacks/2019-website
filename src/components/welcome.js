import React, { useContext } from 'react';
import styled from 'styled-components';
import { isChrome } from 'react-device-detect';

import InViewMonitor from 'react-inview-monitor';
import isMobileContext from './isMobileContext';

import WelcomeTitle from '../images/welcomeText.svg';
import WelcomeBorder from '../images/welcomeBorder.svg';
import Eraser from '../images/stationeryEraser.svg';
import Pen2 from '../images/stationeryPen2.svg';
import Pen3 from '../images/stationeryPen3.svg';
import LowerBar from '../images/faqLowerBar.svg';

const Container = styled.div`
	width: 100%;
	/* margin-top: 15em; */
	margin-bottom: 0em;
`;

const WelcomeLogoStyle = styled.div`
	width: 18em;
	justify-content: left;
`;

const WelcomeLogoMobileStyle = styled.div`
	width: 13em;
	justify-content: left;
`;

// top right bottom left
//	color: #3048a1;
const WelcomeTextStyle = styled.p`
	position: relative;
	text-align: left;
	top: -20em;
	font-size: 1em;
	display: block;
	line-height: 1.5em;
	width: 17em;
	margin-left: 7em;
`;

const WelcomeTextMobileStyle = styled.p`
	position: relative;
	margin-left: 0.3em;
	margin-right: 1em;
	text-align: left;
	font-size: 1em;
	display: block;
	line-height: 1.5em;
	width: 17em;
`;

const WelcomeBoxStyle = styled.div`
	position: relative;
	width: 33em;
	height: 27em;
	opacity: 1;
	margin-bottom: 5em;
`;

const WelcomeBoxMobileStyle = styled.div`
	position: relative;
	width: 100%;
	opacity: 1;
	margin: 3em auto;
`;

const EraserStyle = styled.div`
	position: absolute;
	top: 17em;
	left: 94%;
	width: 5em;
	opacity: 1;
`;

const EraserMobileStyle = styled.div`
	position: absolute;
	top: -5em;
	left: 50%;
	width: 2.5em;
	opacity: 1;
	transform: rotate(-80deg);
`;

const Pen2Style = styled.div`
	position: absolute;
	top: 6em;
	left: 75%;
	width: 3.5em;
	opacity: 1;
`;

const Pen3Style = styled.div`
	position: absolute;
	top: -1em;
	left: 88%;
	width: 7em;
	opacity: 1;
`;

const Pen3MobileStyle = styled.div`
	position: absolute;
	top: -0.5em;
	left: 87%;
	width: 3em;
	opacity: 1;
`;

const LowerBarStyle = styled.div`
	position: relative;
	left: -1em;
`;

// place holder for text
const welcomeText =
	'VandyHacks is back this fall in Music City — and it’s ready to redesign hackathons.';
const welcomeBoldPresent = 'Presenting VandyHacks VI: Art Edition.';
const welcomeTextCont =
	'From November 1-3, hundreds of talented and creative students from across the nation will come together to learn, collaborate, and create exciting projects with the ambition to';
const welcomeBoldCode = ' Code a Masterpiece.';

const Welcome = () => {
	const isMobile = useContext(isMobileContext);
	if (isMobile) {
		return (
			<Container>
				<WelcomeLogoMobileStyle>
					<WelcomeTitle />
				</WelcomeLogoMobileStyle>

				<WelcomeBoxMobileStyle>
					<WelcomeTextMobileStyle>{welcomeText}</WelcomeTextMobileStyle>
					<WelcomeTextMobileStyle style={{ fontWeight: 'bold', lineHeight: '0', width: '100%' }}>
						{welcomeBoldPresent}
					</WelcomeTextMobileStyle>
					<WelcomeTextMobileStyle>{welcomeTextCont}</WelcomeTextMobileStyle>
					<WelcomeTextMobileStyle style={{ fontWeight: 'bold', lineHeight: '0' }}>
						{welcomeBoldCode}
					</WelcomeTextMobileStyle>

					<LowerBarStyle>
						<LowerBar />
					</LowerBarStyle>
				</WelcomeBoxMobileStyle>

				<Pen3MobileStyle>
					<Pen3 />
				</Pen3MobileStyle>
			</Container>
		);
	} else {
		return (
			<Container>
				<WelcomeLogoStyle>
					<WelcomeTitle />
				</WelcomeLogoStyle>

				<WelcomeBoxStyle>
					<WelcomeBorder />
					<WelcomeTextStyle>{welcomeText}</WelcomeTextStyle>
					<WelcomeTextStyle
						style={{
							fontWeight: 'bold',
							lineHeight: '0',
							letterSpacing: !isChrome ? '-0.055em' : 'unset',
						}}
					>
						{welcomeBoldPresent}
					</WelcomeTextStyle>
					<WelcomeTextStyle>{welcomeTextCont}</WelcomeTextStyle>
					<WelcomeTextStyle
						style={{
							fontWeight: 'bold',
							lineHeight: '0',
							letterSpacing: !isChrome ? '-0.055em' : 'unset',
						}}
					>
						{welcomeBoldCode}
					</WelcomeTextStyle>
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
	}
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
