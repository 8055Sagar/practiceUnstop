import React, { useEffect } from 'react';
import '../App.css';
import Selectable from '../components/atoms/Selectable';
import cross from '../images/cut.png';

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

const AssessmentForm = ({ isOpen, onClose }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <div className='assessment_form'>
                    <div className='form_header'>
                        <p className='form_header_text'>Create new assessment</p>
                        <img src={cross} alt='cross-button' onClick={onClose} style={{ cursor: 'pointer' }}></img>
                    </div>
                    <div className='form_fields'>
                        <div className='form_field'>
                            <p className='lable_text'>Name of assessment</p>
                            <input className='input_field' placeholder='Select'></input>
                        </div>
                        <div className='form_field'>
                            <p className='lable_text'>Purpose of the test is</p>
                            <Selectable options={options}  isSearchable/>
                        </div>
                        <div className='form_field'>
                            <p className='lable_text'>Description</p>
                            <Selectable options={options}  isSearchable/>
                        </div>
                        <div className='form_field'>
                            <p className='lable_text'>Skills</p>
                            <div className='input_field' style={{height: "130px", padding: "0px"}}>
                            <input className='input_field' style={{width: "100%", marginTop: "80px", borderBottom: "none", borderLeft: "none", borderRight: "none", borderRadius: "0px" }} placeholder='Type Here'></input>
                            </div>
                        </div>
                        <div className='form_field'>
                            <p className='lable_text'>Duration of assessment</p>
                            <input className='input_field' placeholder='HH:MM:SS'></input>
                        </div>
                        <button className='save-button'>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AssessmentForm;
