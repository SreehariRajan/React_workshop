import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';

import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
import EditBlog from './pages/EditBlog';
import AddBlog from './pages/AddBlog';
import Profile from './pages/Profile';
import { Toast } from 'primereact/toast';
import { useContext, useEffect, useRef } from 'react';
import { ToastContext } from './context/ToastContext';

function App() {

  let { toast } = useContext(ToastContext);

  return (
    <BrowserRouter>
      <NavBar />
      <Toast ref={toast} />
      <Routes>
        <Route path={"/"} element={<Home />} exact />
        <Route path={"/blog/:id"} element={<EditBlog />} exact />
        <Route path={"/add"} element={<AddBlog />} exact />
        <Route path={"/profile"} element={<Profile />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
