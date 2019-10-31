import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';

import InViewMonitor from 'react-inview-monitor';
import MtSvgLines from 'react-mt-svg-lines';

import '../../node_modules/animate.css/animate.min.css';

import LogoOnly from '../images/logoOnly.svg';
import LogoVandyHacksText from '../images/textVandyHacks.svg';
import Grid from '../images/gridLogo.svg';
import LocationDateText from '../images/locationDateText.svg';
import isMobileContext from './isMobileContext';

const fadeIn = keyframes`
	from { 
		opacity: 0;
	}
	to { 
		opacity: 1;
	}
`;

const Container = styled.div`
	position: relative;
	width: 76%;
	text-align: center;
	margin: 10em auto;
	min-height: calc(100vh - 10em);
	animation: ${fadeIn} 1s linear;
`;

const ContainerMobile = styled.div`
	position: relative;
	width: 100%;
	text-align: center;
	margin-top: 2em;
	min-height: calc(101vh - 10em);
	animation: ${fadeIn} 1s linear;
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

const ApplyButton = styled.button`
	margin: 2.5em auto;
	padding: 0.5em 2em;
	border: 3px solid hsl(228, 53%, 34%);
	border-radius: 6px;
	background: none;
	color: #293c85;
	font-weight: 500;
	transition: all 0.25s linear;

	user-select: none;

	&:hover,
	&:focus {
		background-color: hsl(228, 53%, 34%);
		color: white;
		cursor: pointer;
	}

	outline: none;
	&::-moz-focus-inner {
		border: 0;
	}
`;

const ApplyButtonMobile = styled(ApplyButton)`
	margin: 1em auto;
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
	const isMobile = useContext(isMobileContext);
	if (isMobile) {
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

				<ApplyButtonMobile>
					Applications Closed!
				</ApplyButtonMobile>

				<LogoGridStyleMobile className="fadeIn">
					<Grid />
				</LogoGridStyleMobile>
			</ContainerMobile>
		);
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

				<ApplyButton onClick={() => (window.location = 'https://apply.vandyhacks.org')}>
					Apply
				</ApplyButton>

				<LogoGridStyle className="fadeIn">
					<Grid />
				</LogoGridStyle>
			</Container>
		);
};

const BigLogoWithGridAnimated = () => <ScrollAnimateInLineSvg SvgElement={<BigLogoWithGrid />} />;

export default BigLogoWithGridAnimated;
