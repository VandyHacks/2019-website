import React, { useContext } from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import SponsorTitle from '../images/sponsorText.svg';
import isMobileContext from './isMobileContext';
import Grid from '../images/gridLogo.svg';
import Asurion from '../images/sponsors/headline/asurion.svg';
import Fulcrum from '../images/sponsors/headline/fulcrumgt.svg';
import AllianceBernstein from '../images/sponsors/platinum/alliance-bernstein.svg';
import CapitalOne from '../images/sponsors/silver/capital-one.svg';
import GIPHY from '../images/sponsors/silver/giphy.svg';
import RedVentures from '../images/sponsors/silver/red-ventures.svg';
import BNYMellon from '../images/sponsors/gold/bny_horizontal.svg';
import L3Harris from '../images/sponsors/gold/l3-harris.svg';
import Hillman from '../images/sponsors/bronze/hillman-black.svg';
import Microsoft from '../images/sponsors/bronze/microsoft.svg';
import IMCTrading from '../images/sponsors/bronze/imc-trading.svg';
import Vanguard from '../images/sponsors/bronze/vanguard.svg';
import StickerMule from '../images/sponsors/campus/stickermule.svg';
import VUSE from '../images/sponsors/bronze/vuse.svg';

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
	margin-bottom: 1em;
	font-size: 0.75em;
	align-items: center;
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

const sponsors = {
	headline: [
		{ name: 'Asurion', link: 'https://www.asurion.com/', Logo: Asurion },
		{ name: 'Fulcrum GT', link: 'https://fulcrumgt.com/jobs/', Logo: Fulcrum },
	],
	platinum: [
		{
			name: 'Alliance Bernstein',
			link: 'https://www.alliancebernstein.com/',
			Logo: AllianceBernstein,
		},
	],
	gold: [
		{ name: 'L3 Harris', link: 'https://www2.l3t.com/ForceX/', Logo: L3Harris },
		{ name: 'BNY Mellon', link: 'https://www.bnymellon.com/', Logo: BNYMellon },
	],
	silver: [
		{ name: 'Capital One', link: 'https://campus.capitalone.com/', Logo: CapitalOne },
		{ name: 'Red Ventures', link: 'https://www.redventures.com/', Logo: RedVentures },
		{
			name: "Macy' Tech",
			link: 'https://technology.macysjobs.com/',
			Logo: () => <img style={{ margin: 0 }} src="/macys-tech.jpg" alt="Macy's Tech Logo" />,
		},
		{ name: 'GIPHY', link: 'https://giphy.com/', Logo: GIPHY },
	],
	bronze: [
		{
			name: 'Vanderbilt University School of Engineering',
			link: 'https://engineering.vanderbilt.edu/',
			Logo: VUSE,
		},
		{ name: 'IMC Trading', link: 'https://www.imc.com/us/', Logo: IMCTrading },
		{ name: 'Microsoft', link: 'https://microsoft.com/', Logo: Microsoft },
		{ name: 'Hillman', link: 'https://www.hillmangroup.com/us/en', Logo: Hillman },
		{ name: 'Vanguard', link: 'https://investor.vanguard.com/corporate-portal/', Logo: Vanguard },
	],
	campus: [{ name: 'Sticker Mule', link: 'https://www.stickermule.com/', Logo: StickerMule }],
};

const Sponsors = ({ isMobile }) => (
	<SponsorContainer isMobile={isMobile}>
		{/* <p
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
		</p> */}
		{sponsors.headline.map(sponsor => (
			<a
				href={sponsor.link}
				title={sponsor.name}
				target="_blank"
				rel="noopener noreferrer"
				style={{ display: 'contents' }}
				key={sponsor.link}
			>
				<sponsor.Logo
					style={{ gridColumn: '1 / span 2', maxHeight: '150px', pointerEvents: 'auto' }}
				/>
			</a>
		))}
		{sponsors.platinum.map(sponsor => (
			<a
				href={sponsor.link}
				title={sponsor.name}
				target="_blank"
				rel="noopener noreferrer"
				style={{ display: 'contents' }}
				key={sponsor.link}
			>
				<sponsor.Logo
					style={{
						gridColumn: '1 / span 2',
						maxHeight: '125px',
						pointerEvents: 'auto',
						maxWidth: '100%',
					}}
				/>
			</a>
		))}
		{sponsors.gold.map(sponsor => (
			<a
				href={sponsor.link}
				title={sponsor.name}
				target="_blank"
				rel="noopener noreferrer"
				style={{ display: 'contents' }}
				key={sponsor.link}
			>
				<sponsor.Logo
					style={{
						gridColumn: '1 / span 2',
						maxHeight: '100px',
						pointerEvents: 'auto',
						width: '75%',
					}}
				/>
			</a>
		))}
		{sponsors.silver.map(sponsor => (
			<a
				href={sponsor.link}
				title={sponsor.name}
				target="_blank"
				rel="noopener noreferrer"
				style={{ display: 'contents' }}
				key={sponsor.link}
			>
				<sponsor.Logo
					style={{
						gridColumn: 'auto',
						maxHeight: '100px',
						pointerEvents: 'auto',
						width: '100%',
					}}
				/>
			</a>
		))}
		{sponsors.bronze.map(sponsor => (
			<a
				href={sponsor.link}
				title={sponsor.name}
				target="_blank"
				rel="noopener noreferrer"
				style={{ display: 'contents' }}
				key={sponsor.link}
			>
				<sponsor.Logo
					style={{
						gridColumn: 'auto',
						maxHeight: '75px',
						pointerEvents: 'auto',
						width: '75%',
					}}
				/>
			</a>
		))}
		{sponsors.campus.map(sponsor => (
			<a
				href={sponsor.link}
				title={sponsor.name}
				target="_blank"
				rel="noopener noreferrer"
				style={{ display: 'contents' }}
				key={sponsor.link}
			>
				<sponsor.Logo
					style={{ gridColumn: 'auto', maxHeight: '60px', width: '60%', pointerEvents: 'auto' }}
				/>
			</a>
		))}
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
