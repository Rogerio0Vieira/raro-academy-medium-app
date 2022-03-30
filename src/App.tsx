import React from 'react';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import { Button } from './components/Button';
import { Login } from './components/Login';

const Contador = () => {
  return <div>Contador</div>;
}

const Aluno = () => {
  const {aluno} = useParams(); 
  console.log('==========', aluno)
  return(
    <Link to="login">{`fazer login com ${aluno}`}</Link>
  )
}

function App() {
  return (
   <BrowserRouter> 
    <Routes>
      <Route path="/login" element={<Login />}/>
      <Route path="/contador" element={<Contador />}/>
      <Route path="/alunos/:aluno" element={<Aluno />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
