import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Login from './components/Login';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/'excat element={<Home/>}/>
    <Route path='/login'excat element={<Login/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
