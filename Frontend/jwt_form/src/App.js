import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import Choose from './Components/Choose';
import Intro from './Components/Intro';


function App() {
  return (
    <Router>
      <Intro/>
      <Routes>
        <Route path='/' element={<Choose/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </Router>

    );
}

export default App;
