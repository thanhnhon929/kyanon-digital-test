import './App.scss'
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Profile from './components/Profile';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/Profile' element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
