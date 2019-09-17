import React, { useEffect, useState } from 'react';
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
	margin: 12em 0;
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

const ScheduleBodyTopCol = styled(ScheduleBodyContainer)`
	width: 22%;
	float: left;
	top: 3em;
	position: relative;
`;

const ScheduleBodyTimeCol = styled(ScheduleBodyContainer)`
	width: 20%;
	float: left;
`;

const ScheduleBodyDescriptionCol = styled(ScheduleBodyContainer)`
	width: 58%;
	float: left;
`;

const DayText = styled.h2`
	text-align: right;
	font-weight: normal;
`;

const TimeText = styled.p`
	text-align: right;
`;

const EventText = styled.p`
	text-align: left;
	padding: 0 1.5em;
`;

const scheduleData = [
	{
		date: 'Nov1',
		day: 'Fri',
		schedule: [
			{ time: '5:30p', event: 'check-in' },
			{ time: '6:00p', event: 'dinner' },
			{ time: '8:30p', event: 'open ceremony' },
			{ time: '10:00p', event: 'Hacking begins' },
			{ time: '10:00p', event: 'pitch session' },
			{ time: '10:00p', event: 'git tech talk' },
			{ time: '10:30p', event: 'beginner switch session' },
			{ time: '11:00p', event: 'beginner tech talk' },
		],
	},
	{
		date: 'Nov2',
		day: 'Sat',
		schedule: [
			{ time: '5:30p', event: 'check-in' },
			{ time: '5:30p', event: 'check-in' },
			{ time: '5:30p', event: 'check-in' },
		],
	},
	{
		date: 'Nov3',
		day: 'Sun',
		schedule: [
			{ time: '5:30p', event: 'check-in' },
			{ time: '5:30p', event: 'check-in' },
			{ time: '5:30p', event: 'check-in' },
		],
	},
];

const Schedule = () => {
	const [curSchedule, setCurSchedule] = useState(scheduleData[0].schedule);
	// onClick={() => setCurSchedule(...)}
	// when use {curSchedule}
	return (
		<Container>
			<ScheduleLogoStyle>
				<ScheduleTitle />
			</ScheduleLogoStyle>

			<ScheduleBodyContainer>
				{/* <ScheduleBar /> */}

				<ScheduleBodyTopCol>
					<DayText>Friday Nov1</DayText>
					<DayText>Saturday Nov2</DayText>
					<DayText>Sunday Nov3</DayText>
				</ScheduleBodyTopCol>

				<ScheduleBodyTimeCol>
					<TimeText>5:30p</TimeText>
					<TimeText>5:30p</TimeText>
					<TimeText>5:30p</TimeText>
					<TimeText>5:30p</TimeText>
					<TimeText>5:30p</TimeText>
					<TimeText>5:30p</TimeText>
					<TimeText>5:30p</TimeText>
					<TimeText>5:30p</TimeText>
				</ScheduleBodyTimeCol>

				<ScheduleBodyDescriptionCol>
					<EventText>Description Description</EventText>
					<EventText>Description Description</EventText>
					<EventText>Description Description</EventText>
					<EventText>Description Description</EventText>
					<EventText>Description Description</EventText>
					<EventText>Description Description</EventText>
					<EventText>Description Description</EventText>
					<EventText>Description Description</EventText>
				</ScheduleBodyDescriptionCol>
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
