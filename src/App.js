import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Profile from './components/Profile';
import NavComponent from './components/NavComponent';


function App() {
  return (
    <div>
    <BrowserRouter>
    <NavComponent/>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/Profile' element={<Profile/>}/>
    </Routes>
   
   
    </BrowserRouter>
    </div>
  );
}

export default App;
/*
 
*/