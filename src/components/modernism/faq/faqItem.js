import React from 'react';
import PropTypes from 'prop-types';

import Arrow from '../../../images/FAQArrow.svg';

class FAQItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			height: 'auto',
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
			this.setState({ height: '8vw', position: 'relative' });
		} else {
			this.setState({ height: 'auto', position: '' });
		}
	}

	render() {
		const arrow_class = this.state.open ? 'arrow-up' : 'arrow-down';

		return (
			<div
				className="faq-item"
				style={{
					height: this.state.height,
					position: this.state.position,
				}}
			>
				<div className="noselect" />
				<div className="question">
					<h4 className="title">{this.state.question}</h4>
					<div className={`arrow-wrapper ${arrow_class}`} onClick={() => this.onArrowClick()}>
						<img src={Arrow} alt="" />
					</div>
				</div>
				{this.state.open && <div className="answer">{this.state.answer}</div>}
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
