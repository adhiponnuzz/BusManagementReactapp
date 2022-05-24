import logo from './logo.svg';
import './App.css';
import Addbus from './component/Addbus';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.min.js';
import Searchbus from './component/Searchbus';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" exact element={<Addbus/>}/>
      <Route path="/search" exact element={<Searchbus/>}/>

      

        




      


    </Routes>
    
    
    
    
    </BrowserRouter>
    
    </>

  );
}

export default App;
