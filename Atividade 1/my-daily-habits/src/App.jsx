// src/App.jsx
import Header from './components/Header'
import Footer from './components/Footer'
import BemVindo from './components/BemVindo'
import SecaoHabitos from './components/SecaoHabitos'
import HabitList from './components/HabitList'
import Contador from './components/Contador'
///////////////////////////////////////////////////////////////////////


function App() {

  return (
    <div className='caixa'>
      <Header />
      <Contador />
      {/*<BemVindo />*/}
      {/*<SecaoHabitos />*/}
      <HabitList />
      <Footer />
    </div>
  )
}

export default App