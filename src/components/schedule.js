import React from 'react';

// this data for this actually *should* come from the data layer
// fetching from vaken's schedule plugin support thing
// this is just filler data.

// gatsby has graphql support though which should make it easier

// we're going to have to do a lot of fancy css here to get the scrolling to look right.
const Schedule = () => {
	return (
		<div id="schedule-position">
			<div id="schedule">
				<h2 className="header-text" id="schedule-header">
					Schedule
				</h2>
				<div id="schedule-text">
					<div>
						<div className="schedule-date">
							<div>Friday, Nov 1</div>
							<div className="schedule-time">
								<div className="event">
									<div>5:30p </div>
									<div className="schedule-description">
										<div>Description</div>
									</div>
								</div>
								<div className="event">
									<div>6:00p</div>
									<div className="schedule-description">
										<div>Description</div>
									</div>
								</div>
								<div className="event">
									<div>8:00p</div>
									<div className="schedule-description">
										<div>Description</div>
									</div>
								</div>
							</div>
						</div>

						<div className="schedule-date">
							<div>Saturday, Nov 2</div>
							<div className="schedule-time">
								<div className="event">
									<div>5:30p </div>
									<div className="schedule-description">
										<div>Description</div>
									</div>
								</div>
								<div className="event">
									<div>6:00p</div>
									<div className="schedule-description">
										<div>Description</div>
									</div>
								</div>
								<div className="event">
									<div>8:00p</div>
									<div className="schedule-description">
										<div>Description</div>
									</div>
								</div>
							</div>
						</div>

						<div className="schedule-date">
							<div>Sunday, Nov 3</div>
							<div className="schedule-time">
								<div className="event">
									<div>5:30p </div>
									<div className="schedule-description">
										<div>Description</div>
									</div>
								</div>
								<div className="event">
									<div>6:00p</div>
									<div className="schedule-description">
										<div>Description</div>
									</div>
								</div>
								<div className="event">
									<div>8:00p</div>
									<div className="schedule-description">
										<div>Description</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Schedule;
