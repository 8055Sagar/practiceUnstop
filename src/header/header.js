import { useState } from 'react';
import '../App.css';
import adminIcon from '../images/admin_icon.png';
import adminMeds from '../images/admin_meds.png';
import cross from '../images/cut.png';
import dashboard from '../images/dashboard.png';
import laptop from '../images/laptop.png';
import mobile from '../images/mobile.png';
import noteAlt from '../images/note_alt (1).png';
import quiz from '../images/quiz.png';
import segment from '../images/segment.png';



import './header.scss';

function Header() {
    const [selectedTab, setSelectedTab] = useState('My Assessments');

    const [isOpen, setIsOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const isMobileDevice = window.matchMedia('(max-width: 480px)').matches;

    const onTabClick = (tabOption) => {
        setSelectedTab(tabOption);
    };

    return (
    <div className='header'>
        <div className='headerBar'>
            <div className='headerTags'>
                <img src={segment} alt='burger icon' onClick={toggleMenu}></img>
                {isOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
                {/* {isOpen && ( */}
                    <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <div className='menu_bar'>
                        <p>Menu</p>
                        <img src={cross} alt='menu'onClick={toggleMenu} ></img>
                        </div>

                        <div className='menu_items'>
                        <img src={dashboard} alt='dashboard'></img>
                        <p>Dashboard</p>
                        </div>
                        <div className='menu_items'>
                        <img src={noteAlt} alt='note alt'></img>
                        <p>Assessment</p>
                        </div>
                        <div className='menu_items'>
                        <img src={quiz} alt='admin icon'></img>
                        <p>My Library</p>
                        </div>
                        <hr  className='divider'/>
                        <div className='menu_items'>
                        <img src={adminMeds} alt='admin meds'></img>
                        <p>Round Status</p>
                        <img src={adminIcon} alt='admin meds' style={{marginLeft:"70px", width:"50px"}}></img>

                        </div>
                    </div>
                {/* )} */}
                <button className={`assessmentText ${selectedTab === 'Assessment' ? 'active' : ''}`} onClick={() => onTabClick('Assessment')} disabled={isMobileDevice}>
                    Assessment
                </button>
                <hr  className='divider'/>
                <div className={`myAssessmentsText ${selectedTab === 'My Assessments' ? 'active' : ''}`} onClick={() => onTabClick('My Assessments')}>
                    My Assessments
                </div>
            </div>
            <img className='mobileIcon' src={mobile} alt='mobile icon' style={{ cursor: 'pointer' }}></img>
            <img src={laptop} alt='laptop icon' style={{ cursor: 'pointer' }}></img>
        </div>
    </div>
    );
}

export default Header;
