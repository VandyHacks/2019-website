import React from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';
import MtSvgLines from 'react-mt-svg-lines';

import '../../node_modules/animate.css/animate.min.css';

import LogoOnly from '../images/logoOnly.svg';
import LogoVandyHacksText from '../images/textVandyHacks.svg';
import Grid from '../images/gridLogo.svg';
import LocationDateText from '../images/locationDateText.svg';
import useWindowWidth from './utils/useWindowWidth.js';

const Container = styled.div`
	width: 76%;
	text-align: center;
	margin: 10em auto;
`;

const ContainerMobile = styled.div`
	width: 100%;
	text-align: center;
	margin-top: 2em;
`;

const LogoGridStyle = styled.div`
	position: absolute;
	top: 14em;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	width: 60%;
	opacity: 1;
	z-index: -1;
`;

const LogoGridStyleMobile = styled.div`
	position: absolute;
	top: 12em;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
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

const LogoOnlyStyleMobile = styled.div`
	display: inline-block;
	width: 60%;
	justify-content: center;
	fill-opacity: 1;
	z-index: 2;
`;

const LogoVandyHacksTextStyle = styled.div`
	width: 30em;
	margin: 1.5em auto 0.3em auto;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	fill: white;
	fill-opacity: 1;
	z-index: 2;
`;

const LogoVandyHacksTextStyleMobile = styled.div`
	width: auto;
	margin: 1.5em auto 0.3em auto;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	fill: white;
	fill-opacity: 1;
	z-index: 2;
`;

const LocationDateTextStyle = styled.div`
	width: 20em;
	margin: 0.6em auto;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
`;

const LocationDateTextStyleMobile = styled.div`
	width: auto;
	margin: 0.6em auto;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
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

const BigLogoWithGrid = () => {
	const isMobile = useWindowWidth() <= 768;
	if(isMobile) {
		return (
			<ContainerMobile>
				<LogoOnlyStyleMobile>
					<LogoOnly />
				</LogoOnlyStyleMobile>
		
				<LogoVandyHacksTextStyleMobile>
					<LogoVandyHacksText />
				</LogoVandyHacksTextStyleMobile>
		
				<LocationDateTextStyleMobile>
					<LocationDateText />
				</LocationDateTextStyleMobile>
		
				<LogoGridStyleMobile className="fadeIn">
					<Grid />
				</LogoGridStyleMobile>

			</ContainerMobile>
		)
	} else
	return (
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
	)
};

const BigLogoWithGridAnimated = () => <ScrollAnimateInLineSvg SvgElement={<BigLogoWithGrid />} />;

export default BigLogoWithGridAnimated;
