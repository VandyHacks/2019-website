import React, { useContext } from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import SponsorTitle from '../images/sponsorText.svg';
import SponsorBorder from './sponsorBorder';
import isMobileContext from './isMobileContext';
import UpperBorderBar from '../images/faqUpperBar.svg';
import LowerBorderBar from '../images/faqLowerBar.svg';
import Grid from '../images/gridLogo.svg';
import Asurion from '../images/asurion.svg';
import Fulcrum from '../images/fulcrumgt.svg';

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
	const isMobile = useContext(isMobileContext);
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
				<SponsorTitleStyle style={{ background: 'white', zIndex: '1' }}>
					<SponsorTitle />
				</SponsorTitleStyle>
				<SponsorBorderStyle style={{ transform: 'translateY(-40px)', zIndex: '0' }}>
					<SponsorBorder>
						<p
							style={{
								fontSize: '1.4em',
								gridColumn: '1 / span 2',
								justifySelf: 'flex-start',
								margin: 0,
								color: '#3048a1',
								fontWeight: 'bold',
								paddingLeft: '1.75em',
							}}
						>
							Special thanks to our Headline sponsors:
						</p>
						<a href="https://www.asurion.com/" style={{ display: 'contents' }}>
							<Asurion
								style={{ gridColumn: '1 / span 2', maxHeight: '150px', pointerEvents: 'auto' }}
							/>
						</a>
						<a href="https://fulcrumgt.com/jobs/" style={{ display: 'contents' }}>
							<Fulcrum
								style={{ gridColumn: '1 / span 2', maxHeight: '150px', pointerEvents: 'auto' }}
							/>
						</a>
						<p
							style={{
								fontSize: '1.4em',
								gridColumn: '1 / span 2',
								// justifySelf: 'flex-start',
								margin: 0,
								color: '#3048a1',
								fontWeight: 'bold',
								paddingLeft: '1.75em',
							}}
						>
							Check back soon for our full sponsor list!
						</p>
					</SponsorBorder>
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
