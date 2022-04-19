import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Profile from './components/Team/Profile/Profile';
import Deves_form from './components/Forms/RegeForm/Deves_form';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';




function App() {
  return (

    <>

      <Header />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/admin' element={<Admin></Admin>}></Route>
            <Route path='/profile' element={<Profile></Profile>}></Route>
            <Route path='/registration' element={<Deves_form></Deves_form>}></Route>
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
