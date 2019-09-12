import React from 'react';

// import arrow from "./images/"
// need to import arrow svg from somewhere

const FAQItem = ({ question, answer }) => {
	return (
		<div>
			<div class="faq-item noselect"> </div>
			<div class="question">
				<div class="arrow-wrapper">{/* <img src="~assets/img/arrow.svg"></img> */}</div>
				<h4 class="title">{question}</h4>
			</div>
			{/* <transition name="slide-fade"> */}
			<div v-if="open" class="answer">
				{answer}
			</div>
			{/* </transition> */}
		</div>
	);
};

export default FAQItem;
