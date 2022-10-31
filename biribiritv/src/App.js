import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import Contacto from './Components/Contacto'
import Programas from './Components/Programas';
import Landing from './Components/Landing';
import Footer from './Components/Footer';

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
      <Footer/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
