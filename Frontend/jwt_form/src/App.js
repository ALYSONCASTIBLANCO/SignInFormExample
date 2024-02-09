import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import Recover from './Components/Recover';
import Choose from './Components/Choose';
import Intro from './Components/Intro';
import { useEffect, useState } from 'react';
import RecoverUser from './Components/RecoverUser';
import RecoverPassword from './Components/RecoverPassword';


function App() {
  const[usuarios, setUsuarios]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);

  async function fetchData(){
    const res=await fetch("http://localhost:4000/api/users");
    const data=await res.json();
    setUsuarios(data);
  }
  return (
    <Router>
      <Intro/>
      <Routes>
        <Route path='/' element={<Choose/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/recover' element={<Recover/>}/>
        <Route path='/userrecovery' element={<RecoverUser/>}/>
        <Route path='/passrecovery' element={<RecoverPassword/>}/>
      </Routes>
    </Router>

    );
}

export default App;
