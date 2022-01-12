import React from 'react-dom';
import "./Review.scss";
import Button from '../Button/Button';

const Review = (props) => {
    const { event } = props;

    const primaryColorStyles = {
        backgroundColor: event.theme.primaryColor
    }
    const accentColorStyles = {
        backgroundColor: event.theme.accentColor
    }

    const generateScheduleList = () => {
        const scheduleArr = event.schedule;
        console.log(scheduleArr);
        return scheduleArr.map(schedule =>
            (
                <div className='review__section review__right-schedule-card'>
                    <p className='review__section-input'>{schedule.name}</p>
                    {schedule.title !== "" ? <p className='review__section-input'>{schedule.title}</p> : null}
                    {schedule.author !== "" ? <p className='review__section-input'>By {schedule.author}</p> : null}
                    <p className='review__section-text'>Description</p>
                    <p className='review__section-input'>{schedule.description}</p>
                    {schedule.alternativeDescription !== "" ? <><p className='review__section-text'>Alternative Description</p>
                    <p className='review__section-input'>{schedule.alternateDescription}</p></> : null}
                </div>
            )
        )
    }

    return (
        <div className='review'>
            <div className='review__left'>
                <div className='review__section review__left-info'>
                    <p>Step 05</p>
                   <h2>Review</h2>
                   <div className='review__section-title-edit'>
                   <h3>Event Information</h3>
                   <p>edit</p>
                   </div>
                   <p className='review__section-header'>Part 1</p>
                   <p className='review__section-text'>Name</p>
                   <p className='review__section-input'>{event.name}</p> 
                   <p className='review__section-text'>Series</p>
                   <p className='review__section-input'>{event.series}</p>
                   <p className='review__section-text'>Date</p>
                   <p className='review__section-input'>{event.date}</p>
                   <p className='review__section-text'>Time</p>
                   <p className='review__section-input'>{event.time}</p>
                   
                   <p className='review__section-header'>Part 2</p>
                   <p className='review__section-text'>Heading</p>
                   <p className='review__section-input'>{event.intro.heading}</p>
                   <p className='review__section-text'>Content</p>
                   <p className='review__section-input'>{event.intro.content}</p>
                   <p className='review__section-text'>Quote</p>
                   <p className='review__section-input'>{event.intro.quote}</p>
                   <p className='review__section-text'>Quote Caption</p>
                   <p className='review__section-input'>{event.intro.quoteCaption}</p>
                </div>

                <div className='review__section review__left-theme'>
                    <div class='review__section-title-edit'>
                        <h3>Theme Settings</h3>
                        <p>edit</p>
                    </div>
                    <p className='review__section-text'>Font Type</p>
                    <p className='review__section-input'>{event.theme.templateTheme}</p>
                    <p className='review__section-text'>Primary Colour</p>
                    <div className='review__left-theme-box' style={primaryColorStyles}></div>
                    <p className='review__section-text'>Accent Colour</p>
                    <div className='review__left-theme-box' style={accentColorStyles}></div>

                </div>
            </div>
            <div className='review__right'>
                <div className='review__section review__right-next'>
                    <h4>Are you happy with all of the information provided for this event?</h4>
                    <Button buttonType="primary" buttonText="Submit"/>
                </div>
                <div className='review__section review__right-schedule'>
                <div className='review__section-title-edit'>
                    <h3>Event Schedule</h3>
                    <p>edit</p>
                </div>
                {generateScheduleList()}
                </div>
            </div>
        </div>
    )
}

export default Review;