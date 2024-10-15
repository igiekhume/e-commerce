import './App.css';
import Header from './components/Header';
import{ Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import Home from './pages/Home';
import Signup from './pages/Signup';


function App() {
  return (
    <>
    
    <Header />
    <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login />}/>
        <Route path='sign-up' element={<Signup/>}/>
        <Route path='/forget-password' element={<ForgetPassword />} />
      </Routes>
    </main>
    </>
  );
}

export default App;
