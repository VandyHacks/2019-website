import React from 'react';
import styled from 'styled-components';

import InViewMonitor from 'react-inview-monitor';

import ScheduleTitle from '../images/scheduleText.svg';
import ScheduleBar from '../images/scheduleDateBar.svg';
import Box from '../images/stationeryBox.svg';
import Box2 from '../images/stationeryBox2.svg';
import Pen from '../images/stationeryPen.svg';

// this data for this actually *should* come from the data layer
// fetching from vaken's schedule plugin support thing
// this is just filler data.

// gatsby has graphql support though which should make it easier

// we're going to have to do a lot of fancy css here to get the scrolling to look right.

const Container = styled.div`
	&:after {
		content: '';
		display: table;
		clear: both;
	}
`;

const ScheduleLogoStyle = styled.div`
	width: 35%;
	position: relative;
	top: 20em;
`;

const BoxStyle = styled.div`
	position: absolute;
	top: 2em;
	left: 6em;
	width: 7em;
	opacity: 1;
`;

const Box2Style = styled.div`
	position: absolute;
	top: 2em;
	left: 22em;
	width: 7em;
	opacity: 1;
`;

const PenStyle = styled.div`
	position: absolute;
	top: 6em;
	left: -2em;
	width: 8em;
	opacity: 1;
`;

const ScheduleBodyContainer = styled.div`
	float: right;
	width: 50%;
`;

const Schedule = () => {
	return (
		<Container>
				<ScheduleLogoStyle>
					<ScheduleTitle />
				</ScheduleLogoStyle>

			<ScheduleBodyContainer>
				<div>
					<div>
						<div>Friday</div>
						<div>Nov 1</div>
					</div>

					<div>
						<div>Saturday</div>
						<div>Nov 2</div>
					</div>

					<div>
						<div>Sunday</div>
						<div>Nov 3</div>
					</div>
				</div>

				<div>
					<div>5:30p</div>
					<div>6:00p</div>
					<div>8:000p</div>
				</div>

				<div>
					<div>Description</div>
					<div>Description</div>
					<div>Description</div>
				</div>
			</ScheduleBodyContainer>

			<BoxStyle>
				<Box />
			</BoxStyle>

			<Box2Style>
				<Box2 />
			</Box2Style>
			<PenStyle>
				<Pen />
			</PenStyle>
		</Container>
	);
};

const ScheduleAnimated = () => (
	<InViewMonitor
		classNameNotInView="vis-hidden"
		classNameInView="animated fadeInLeft" // fadeInLeft, or fadeInRight
	>
		<Schedule />
	</InViewMonitor>
);

export default ScheduleAnimated;
