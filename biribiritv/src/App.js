import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Contacto from './components/Contacto'
import Programas from './components/Programas';
import Landing from './components/Landing';

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
