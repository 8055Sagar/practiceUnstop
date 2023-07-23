import './App.css';
import Assessment from './assessment/assessment';
import Desktop from './desktop/desktop';
import Header from './header/header';

function App() {
  return (
    <div className="App">
      <Desktop></Desktop>
      <div className='assessmentForm'>
      <Header></Header>
      <Assessment></Assessment>
      </div>
    </div>
  );
}

export default App;
