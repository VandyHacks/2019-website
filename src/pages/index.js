import React from 'react';
// import { Link } from 'gatsby';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';
import MtSvgLines from 'react-mt-svg-lines';
import '../../node_modules/animate.css/animate.min.css';

import '../components/layout.css';

import Welcome from '../components/welcome';
import FAQ from '../components/faq';
import Schedule from '../components/schedule';
import SponsorBox from '../components/sponsorBox';

import LogoOnly from '../images/logoOnly.svg';
import LogoVandyHacksText from '../images/textVandyHacks.svg';
import Grid from '../images/gridLogo.svg';
import LocationDateText from '../images/LocationDateText.svg';

const Container = styled.div`
	width: 76%;
	text-align: center;
	margin: 10em auto;
`;

const LogoStyle = styled.div`
	position: absolute;
	top: 14em;
	left: 25em;
	width: 60%;
	opacity: 1;
`;

// TODO white fill and animation later!
const LogoOnlyStyle = styled.div`
	display: inline-block;
	width: 30%;
	justify-content: center;
	fill: black;
	fill-opacity: 1;
`;

const LogoVandyHacksTextStyle = styled.div`
	width: 30em;
	margin: 1.5em auto 0.3em auto;
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

		<LogoStyle>
			<Grid />
		</LogoStyle>
	</Container>
);

const IndexPage = () => (
	<Container>
		<ScrollAnimateInLineSvg SvgElement={<BigLogoWithGrid />} />

		<InViewMonitor
			classNameNotInView="vis-hidden"
			classNameInView="animated fadeInUp" // fadeInLeft, or fadeInRight
		>
			<Welcome></Welcome>
		</InViewMonitor>

		<InViewMonitor
			classNameNotInView="vis-hidden"
			classNameInView="animated fadeInLeft" // fadeInLeft, or fadeInRight
		>
			<FAQ></FAQ>
		</InViewMonitor>

		<Schedule></Schedule>

		<SponsorBox></SponsorBox>
	</Container>
);

export default IndexPage;
