import React from 'react';

import FAQItem from './faqItem';

// need to import an array of objects with question answer pairs
// also need to figure out how to link within them
const example = [
	{ question: 'What is lorem?', answer: 'Ipsum' },
	{ question: 'What is ipsum?', answer: 'Lorem' },
];
const FAQ = () => {
	return (
		<div>
			<h2>FAQ</h2>
			{example.map((el, idx) => (
				<FAQItem key={idx} {...el}></FAQItem>
			))}
		</div>
	);
};

export default FAQ;
