import React from 'react';
import PropTypes from 'prop-types';

import Arrow from '../../../images/FAQArrow.svg';

class FAQItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			maxHeight: '0vw',
			position: '',
			question: this.props.question,
			answer: this.props.answer,
		};
	}

	onArrowClick() {
		this.setState({ open: !this.state.open });
		this.changeHeight();
	}

	changeHeight() {
		if (!this.state.open) {
			this.setState({ maxHeight: '8vw', position: 'relative' });
		} else {
			this.setState({ maxHeight: '0vw', position: '' });
		}
	}

	render() {
		const arrow_class = this.state.open ? 'arrow-up' : 'arrow-down';
		const answer_open = this.state.open ? 'open' : '';
		const styling = {
			maxHeight: this.state.maxHeight,
			position: this.state.position,
		};

		return (
			<div className="faq-item">
				<div className="noselect" />
				<div className="question">
					<h4 className="title">{this.state.question}</h4>
					<div className={`arrow-wrapper ${arrow_class}`} onClick={() => this.onArrowClick()}>
						<Arrow className="arrow" />
					</div>
				</div>
				<div className={`answer ${answer_open}`} style={styling}>
					{this.state.answer}
				</div>
			</div>
		);
	}
}

FAQItem.propTypes = {
	open: PropTypes.number,
	question: PropTypes.string,
	answer: PropTypes.string,
	changeOpenArray: PropTypes.func,
};

export default FAQItem;
