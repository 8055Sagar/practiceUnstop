import '../App.css';
import threeDot from '../images/3 dot.png';
import briefCase from '../images/briefCase.png';
import calenderLogo from '../images/calendar_today.png';
import linkLogo from '../images/link.png';
import profileLogo from '../images/profile.png';
import divider from '../images/Vector332.png';

function AssessmentCard() {
    return (
                    <div className='assessment_component'>
                        <div className='assessment_description'>
                            <div className='assessment_details'>
                                <img src={briefCase} alt='add icon'></img>
                                <div className='calender_icon'>
                                    <p className='assessment_text'>Math Assessment</p>
                                    <div className='share_section'>
                                        <p className='job_text'>Job</p>
                                        <hr className='smallDivider'></hr>
                                        <div className='date'>
                                            <img src={calenderLogo} alt='calender-icon'></img>
                                            <p className='date_text'> 20 Apr 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='dots'>
                                <img src={threeDot} alt='3 Dots'></img>
                            </div>
                        </div>
                        <img src={divider} alt='divider'></img>
                        <div className='duration'>
                            <div className='duration_with_questions'>
                                <div className='time_duration'>
                                    <p className='zero_text'>00</p>
                                    <p className='duration_text'> Duration</p>
                                </div>
                                <div className='time_duration'>
                                    <p className='zero_text'>00</p>
                                    <p className='duration_text'> Questions</p>
                                </div>
                            </div>
                            <div className='share_section'>
                                <div className='share'>
                                    <img src={linkLogo} alt='link logo'></img>
                                    <p className='share_text'> Share</p>
                                </div>
                                <div>
                                    <img src={profileLogo} alt='profile -logo'></img>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}

export default AssessmentCard;
