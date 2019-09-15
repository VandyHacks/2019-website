import React from 'react';

import FAQItem from './faqItem';

// need to import an array of objects with question answer pairs
// also need to figure out how to link within them


import styled from "styled-components"

const StyledDiv = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: center;
`

const example = [
	{ question: 'What is lorem?', answer: 'Ipsum' },
	{ question: 'What is ipsum?', answer: 'Lorem' },
];
const FAQ = () => {
	return (
		<StyledDiv>
			<h2>FAQ</h2>
			{example.map((el, idx) => (
				<FAQItem key={idx} {...el}></FAQItem>
			))}
		</StyledDiv>
	);
};

export default FAQ;
