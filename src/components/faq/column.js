import React, { useState } from 'react';
import styled from 'styled-components';

import QuestionSet from './questionSet';

// accepted props of a FAQ column (2 on desktop, 1 on mobile + tablet)

const ColumnContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 45%;
`;

const Column = ({ questions }) => {
	const [openedIndex, setOpened] = useState(0);

	const onQuestionClicked = index => {
		setOpened(openedIndex === index ? -1 : index);
	};

	return (
		<ColumnContainer>
			{questions.map(({ question, answer }, i) => (
				<QuestionSet
					key={question}
					question={question}
					answer={answer}
					shouldOpen={openedIndex === i}
					onClick={() => onQuestionClicked(i)}
				/>
			))}
		</ColumnContainer>
	);
};

export default Column;
