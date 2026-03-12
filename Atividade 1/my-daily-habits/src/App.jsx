// import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import BemVindo from './components/BemVindo'

function App() {
 return (
  <div className='caixa'>
    <h1 className='titulo'>My Daily Habits</h1>
    <p className='texto'>Bora para nossa primeira atividade filho</p>
    <BemVindo nomeUsuario="turma iteam" totalHabitos={5}/>
    <Footer />
  </div>
 ) 
}

export default App