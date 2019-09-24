import React, { useContext } from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import SponsorTitle from '../images/sponsorText.svg';
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
	border: 3px #3048a1 dashed;
`;

const SponsorTitleStyleMobile = styled.div`
	width: 12em;
`;

const SponsorContainer = styled.div`
	padding: ${({ isMobile }) => (isMobile ? '10px' : '2em')};
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-auto-flow: row;
	justify-items: center;
	align-items: center;
	grid-gap: ${({ isMobile }) => (isMobile ? '10px' : '2em')};
	margin-bottom: 3em;
	font-size: 0.75em;
`;

const LogoGridStyleMobile = styled.div`
	position: relative;
	left: 0;
	right: 0;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	opacity: 1;
	z-index: -1;
`;

const Sponsors = ({ isMobile }) => (
	<SponsorContainer isMobile>
		<p
			style={{
				fontSize: '1.4em',
				gridColumn: '1 / span 2',
				justifySelf: 'flex-start',
				margin: 0,
				color: '#3048a1',
				fontWeight: 'bold',
				paddingLeft: isMobile ? 0 : '1.75em',
			}}
		>
			Special thanks to our Headline sponsors:
		</p>
		<a
			href="https://www.asurion.com/"
			target="_blank"
			rel="noopener noreferrer"
			style={{ display: 'contents' }}
		>
			<Asurion style={{ gridColumn: '1 / span 2', maxHeight: '150px', pointerEvents: 'auto' }} />
		</a>
		<a
			href="https://fulcrumgt.com/jobs/"
			target="_blank"
			rel="noopener noreferrer"
			style={{ display: 'contents' }}
		>
			<Fulcrum style={{ gridColumn: '1 / span 2', maxHeight: '150px', pointerEvents: 'auto' }} />
		</a>
		<p
			style={{
				fontSize: '1.4em',
				gridColumn: '1 / span 2',
				margin: 0,
				color: '#3048a1',
				fontWeight: 'bold',
				paddingLeft: isMobile ? 0 : '1.75em',
			}}
		>
			Check back soon for our full sponsor list!
		</p>
	</SponsorContainer>
);

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
					<div style={{ position: 'absolute', width: '100%' }}>
						<Grid />
					</div>
					<Sponsors isMobile />
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
					<Sponsors />
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
