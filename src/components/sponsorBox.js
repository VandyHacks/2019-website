import React from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import SponsorTitle from '../images/sponsorText.svg';
import SponsorBorder from '../images/sponsorBorder.svg';
import useWindowWidth from './utils/useWindowWidth.js';
import UpperBorderBar from '../images/faqUpperBar.svg';
import LowerBorderBar from '../images/faqLowerBar.svg';
import Grid from '../images/gridLogo.svg';

const Container = styled.div`
	width: 100%;
`;

const SponsorTitleStyle = styled.div`
	width: 30%;
	position: relative;
	left: 75%;
`;

const SponsorBorderStyle = styled.div`
	width: 100%;
`;

const SponsorTitleStyleMobile = styled.div`
	width: 12em;
`;

const SponsorBorderStyleMobile = styled.div`
	width: 100%;
	margin-top: -0.5em;
`;

const LogoGridStyleMobile = styled.div`
	top: 9em;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	opacity: 1;
	z-index: -1;
`;

// see https://github.com/VandyHacks/VHF2018-website/blob/master/components/Sponsors.vue
const SponsorBox = () => {
	const isMobile = useWindowWidth() <= 768;
	if (isMobile) {
		return (
			<Container>
				<SponsorTitleStyleMobile>
					<SponsorTitle />
				</SponsorTitleStyleMobile>
				<LogoGridStyleMobile>
					<Grid />
				</LogoGridStyleMobile>
			</Container>
		);
	} else
		return (
			<Container>
				<SponsorTitleStyle>
					<SponsorTitle />
				</SponsorTitleStyle>
				<SponsorBorderStyle>
					<SponsorBorder />
				</SponsorBorderStyle>
			</Container>
		);
};

const SponsorBoxAnimated = () => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView="animated fadeInUp" // fadeInLeft, or fadeInRight
	>
		<SponsorBox />
	</InViewMonitor>
);

export default SponsorBoxAnimated;
