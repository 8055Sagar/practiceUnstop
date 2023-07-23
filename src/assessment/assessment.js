import React, { useState } from 'react';
import '../App.css';
import addLogo from '../images/add.png';
import barChartLogo from '../images/bar_chart.png';
import captiveLogo from '../images/captive_portal.png';
import funnelLogo from '../images/filter_list_alt.png';
import candidatesLogo from '../images/group.png';
import searchLogo from '../images/search.png';
import totalAssessmentsLogo from '../images/total_assessments.png';
import totalPurposesLogo from '../images/total_purpose.png';
import './assessment.scss';

import AssessmentCard from './assessmentCard';
import AssessmentForm from './assessmentForm';


function Assessment() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedTab, setSelectedTab] = useState('My Assessments');

    const onTabClick = (tabOption) => {
      setSelectedTab(tabOption);
    };


    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className='assessments'>
            <div className='assessmentHeader'>
                <button className={`assessmentButton ${selectedTab === 'My Assessments' ? 'active' : ''}`} onClick={() => onTabClick('My Assessments')}>My Assessments</button>
                <button className={`assessmentButton ${selectedTab === 'Unstop Assessments' ? 'active' : ''}`} onClick={() => onTabClick('Unstop Assessments')}>Unstop Assessments</button>
            </div>
            <div className='assessmentsForm'>
                <div className='overview_text'>
                    <p className='assessmentText'>
                        Assessments Overview
                    </p>
                </div>
                <div className='assessmentsOverview'>
                    <div className='totalAssessments'>
                        <p className='texts'>
                            Total Assessment
                        </p>
                        <div className='icon_one'>
                            <img src={totalAssessmentsLogo} alt='total assessments'></img>
                            <p className='total_p'>
                                34
                            </p>
                        </div>
                    </div>
                    <div className='total_candidates'>
                        <p className='texts'>
                            Candidates
                        </p>
                        <div className='icon_two'>
                            <img src={candidatesLogo} alt='Candidates-logo'></img>
                            <div className='content_two'>
                                <div className='content_in_two'>
                                <span className='span_in_two'>11,145</span>
                                <p className='p_span'>+89</p>
                                </div>
                                <div className='text_in_two'>Total Candidates
                                </div>
                            </div> <hr  className='divider'/>
                            <div className='content_two' >
                                <div className='content_in_two' style={{ width: "33px" }}>
                                    <span className='span_in_two'>114</span>
                                    <p className='p_span'>+89</p>
                                </div>
                                <div className='text_in_two'>Who Attempted</div>
                            </div>
                        </div>
                    </div>
                    <div className='candidates_source'>
                        <p className='texts'>
                            Candidates Source
                        </p>
                        <div className='icon_three'>
                            <img src={captiveLogo} alt='Captives-logo'></img>
                            <div className='content_two'>
                                <div className='content_in_two'>
                                    <span className='span_in_two'>11,100</span>
                                    <p className='p_span'>+89</p>
                                </div>
                                <div className='text_in_two'>E-mail</div>
                            </div> 
                            <hr  className='divider'/>
                            <div className='content_two' >
                                <div className='content_in_two' style={{ width: "33px" }}>
                                    <span className='span_in_two'>145</span>
                                    <p className='p_span'>+89</p>
                                </div>
                                <div className='text_in_two'>Social Share
                                </div>
                                </div>
                            <hr  className='divider'/>
                            <div className='content_two' >
                                <div className='content_in_two' style={{ width: "33px" }}>
                                    <span className='span_in_two'>145</span>
                                    <p className='p_span'>+89</p>
                                </div>
                                <div className='text_in_two'>Unique Link</div>
                            </div>
                        </div>
                    </div>
                    <div className='total_purpose'>
                        <p className='texts'>
                            Total Purpose
                        </p>
                        <div className='icon_four'>
                            <img src={totalPurposesLogo} alt='total purpose'></img>
                            <p className='total_p'>
                                11
                            </p>
                        </div>
                    </div>
                </div>
                <div className='filter'>
                <div>
                    <p className='assessmentText'>
                        My Assessment
                    </p>
                </div>
                <div className='filterOptions'>
                    <img src={searchLogo} alt='search-icon'></img>
                    <img src={funnelLogo} alt='funnel-icon'></img>
                    <img src={barChartLogo} alt='bar chart-icon'></img>
                </div>
                </div>
                <div className='my_assessment'>
                    <div className='new_assessment_form'onClick={openModal} >
                        <img src={addLogo} alt='add icon'></img>
                        <p className='new_assessment_text'>New Assessment</p>
                        <p className='suggestion_text'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
                    </div>
                    <AssessmentForm isOpen={modalIsOpen} onClose={closeModal}></AssessmentForm>
                    <AssessmentCard></AssessmentCard>
                    <AssessmentCard></AssessmentCard>
                    <AssessmentCard></AssessmentCard>
                    <AssessmentCard></AssessmentCard>
                    <AssessmentCard></AssessmentCard>
                </div>
            </div>
        </div>
    );
}

export default Assessment;
