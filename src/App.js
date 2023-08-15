import logo from './logo.svg';
import './App.css';
import Home from './include/Home.js';
import SignUp from './include/SignUp';
import SignIn from './include/SignIn';
import Dashboard from './include/Dashboard';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className='app'> 
      <Routes>
        <Route path='/*' element={<Home/>}></Route>
        <Route path='SignUp' element={<SignUp/>}></Route>
        <Route path='SignIn' element={<SignIn/>}></Route>
        <Route path='DashBoard' element={<Dashboard/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
