import React from 'react';

// this data for this actually *should* come from the data layer
// fetching from vaken's schedule plugin support thing
// this is just filler data.

// gatsby has graphql support though which should make it easier

// we're going to have to do a lot of fancy css here to get the scrolling to look right.
const Schedule = () => {
	return (
		<div>
			<h2>Schedule</h2>
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
		</div>
	);
};

export default Schedule;
