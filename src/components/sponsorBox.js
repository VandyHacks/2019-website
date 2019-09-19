import React from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import SponsorTitle from '../images/sponsorText.svg';
import SponsorBorder from '../images/sponsorBorder.svg';

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

// see https://github.com/VandyHacks/VHF2018-website/blob/master/components/Sponsors.vue
const SponsorBox = () => {
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
