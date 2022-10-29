import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import Contacto from './Components/Contacto'
import Programas from './Components/Programas';

function App() {
      
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/programas' element={<Programas/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
