import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import Choose from './Components/Choose';
import Intro from './Components/Intro';
import { useEffect, useState } from 'react';


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
      </Routes>
    </Router>

    );
}

export default App;
