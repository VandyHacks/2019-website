import React from 'react';
import InViewMonitor from 'react-inview-monitor';
import '../../../node_modules/animate.css/animate.min.css';

import HeaderShape from '../../images/HeaderShape.svg';
import TextHeaderShapes from '../../images/TextHeaderShapes.svg';

import HeaderInfo from './headerInfo';
import Welcome from '../welcome';
import FAQ from './faq/faq';
import Schedule from '../schedule';

const styleTop = {
	width: '98vw',
	height: '60vw',
	marginTop: '-2.5vw',
	zIndex: '-1',
};

const styleBottom = {
	width: '98.5vw',
	height: '160vw',
	marginTop: '2vw',
	zIndex: '-1',
};

const TopSection = () => {
	return (
		<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInLeft">
			<HeaderShape style={styleTop} />
			<HeaderInfo />
		</InViewMonitor>
	);
};

const BottomSection = () => {
	return (
		<InViewMonitor classNameNotInView="vis-hidden" classNameInView="animated fadeInRight">
			<TextHeaderShapes style={styleBottom} />
			<Welcome />
			<FAQ />
			<Schedule />
		</InViewMonitor>
	);
};

export { TopSection, BottomSection };
