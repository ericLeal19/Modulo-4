// src/App.jsx
import Header from './components/Header'
import Footer from './components/Footer'
import BemVindo from './components/BemVindo'
import SecaoHabitos from './components/SecaoHabitos'
import HabitList from './components/HabitList'
import Contador from './components/Contador'
import  {HabitsProvider}  from './contexts/HabitsProvider'
///////////////////////////////////////////////////////////////////////


function App() {

  return (
    <HabitsProvider>
    <div className='caixa'>
      <Header />
      <Contador />
      <BemVindo nomeUsuario={"Turma Iteam"}/>
      <HabitList />
      <SecaoHabitos />
      <Footer />
    </div>
    </HabitsProvider>
  )
}

export default App