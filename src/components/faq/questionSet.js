import React from 'react';
import styled from 'styled-components';
import useDimensions from 'react-use-dimensions';
import Arrow from './arrow';

const QuestionSetContainer = styled.div`
	margin-bottom: 25px;
`;

const QuestionClickArea = styled.div`
	text-align: left;
	&:focus {
		opacity: 0.8;
	}
`;

const Collapsible = styled.div`
	overflow: hidden;
	transition: height 0.3s ease-out;
	height: ${props => (props.open ? props.height : '0')}px;
`;

const NoWrapContainer = styled.span`
	white-space: nowrap;
`;

const StyledQuestion = styled.h2`
	cursor: pointer;
	font-size: 1.2em;
	font-weight: lighter;
	text-align: left;

	&:hover,
	&:focus {
		color: #3048a1;
		font-weight: normal;
		letter-spacing: -0.04em;
		cursor: pointer;
	}
`;

const StyledAnswer = styled.p`
	text-align: left;
`;

const getSplitText = (text, shouldOpen) => {
	const lastSpaceIndex = text.lastIndexOf(' ');
	const wrappableText = text.substring(0, lastSpaceIndex + 1);
	const lastWord = text.substring(lastSpaceIndex);

	return (
		// consider text later
		<StyledQuestion>
			{wrappableText}
			<NoWrapContainer>
				{lastWord}
				<Arrow open={shouldOpen} />
			</NoWrapContainer>
		</StyledQuestion>
	);
};

const QuestionSet = ({ question, answer, shouldOpen, onClick }) => {
	const [ref, { height }] = useDimensions();

	return (
		<QuestionSetContainer>
			<QuestionClickArea onClick={onClick}>{getSplitText(question, shouldOpen)}</QuestionClickArea>
			<Collapsible id={question} open={shouldOpen} height={height}>
				<StyledAnswer dangerouslySetInnerHTML={{ __html: answer }} ref={ref} />
			</Collapsible>
		</QuestionSetContainer>
	);
};

export default QuestionSet;
