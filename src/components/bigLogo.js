import React from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';
import MtSvgLines from 'react-mt-svg-lines';

import '../../node_modules/animate.css/animate.min.css';

import LogoOnly from '../images/logoOnly.svg';
import LogoVandyHacksText from '../images/textVandyHacks.svg';
import Grid from '../images/gridLogo.svg';
import LocationDateText from '../images/LocationDateText.svg';

const Container = styled.div`
	width: 76%;
	text-align: center;
	margin: 10em auto;
`;

const LogoGridStyle = styled.div`
	position: absolute;
	top: 14em;
	left: 25em;
	width: 60%;
	opacity: 1;
	z-index: -1;
`;

const LogoOnlyStyle = styled.div`
	display: inline-block;
	width: 30%;
	justify-content: center;
	fill-opacity: 1;
	z-index: 2;
`;

const LogoVandyHacksTextStyle = styled.div`
	width: 30em;
	margin: 1.5em auto 0.3em auto;
	fill: white;
	fill-opacity: 1;
	z-index: 2;
`;

const LocationDateTextStyle = styled.div`
	width: 20em;
	margin: 0.6em auto;
`;

const ScrollAnimateInLineSvg = ({ SvgElement }) => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView=""
		childPropsInView={{ animate: true }}
	>
		<MtSvgLines duration={2500} fade>
			{SvgElement}
		</MtSvgLines>
	</InViewMonitor>
);

const BigLogoWithGrid = () => (
	<Container>
		<LogoOnlyStyle>
			<LogoOnly />
		</LogoOnlyStyle>

		<LogoVandyHacksTextStyle>
			<LogoVandyHacksText />
		</LogoVandyHacksTextStyle>

		<LocationDateTextStyle>
			<LocationDateText />
		</LocationDateTextStyle>

		<LogoGridStyle className="fadeIn">
			<Grid />
		</LogoGridStyle>
	</Container>
);

const BigLogoWithGridAnimated = () => <ScrollAnimateInLineSvg SvgElement={<BigLogoWithGrid />} />;

export default BigLogoWithGridAnimated;
