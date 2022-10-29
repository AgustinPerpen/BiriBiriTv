import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
import Header from './Components/Header'
import Contacto from './Components/Contacto'
import Programas from './Components/Programas';
import Landing from './Components/Landing';
=======

import Header from './components/Header'
import Contacto from './components/Contacto'
import Programas from './components/Programas';
>>>>>>> 3fd10eb76187444cda2f3a4afa472ce8caeca805

function App() {
      
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header/>  
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/programas' element={<Programas/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
