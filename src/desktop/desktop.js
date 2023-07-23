import '../App.css';
import dashboard from '../images/Dashboard.png';
import roundStatus from '../images/admin_roundStatus.png';
import assessment from '../images/assessment.png';
import library from '../images/my_library.png';


function Desktop() {
  return (
        <div className='sideBar'>
          <div className=''>
            <img src={dashboard} alt='dashboard' style={{cursor: 'pointer'}}></img>
            <img src={assessment} alt='assessment' style={{cursor: 'pointer'}}></img>
            <img src={library} alt='my library' style={{cursor: 'pointer'}}></img>
            <img src={roundStatus} alt='roundStatus' style={{cursor: 'pointer'}}></img>
          </div>
        </div>
  );
}

export default Desktop;
