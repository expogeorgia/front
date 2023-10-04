import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Api from './components/Api';
import Registration from './components/Registration';
import Admin from './components/Admin';
import Edit from './components/Edit';
import User from './components/User'
import Singin from './components/Singin';
import Singup from './components/Singup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
    <Routes>
      <Route element={<Edit/>} path='/' exact="true"/>
      <Route element={<Api/>} path='/api'/>
      <Route element={<Registration/>} path='/Registration'/>
      <Route element={<Admin/>} path='/Admin'/>
      <Route element={<Edit/>} path='/Edit'/>
      <Route element={<User/>} path='/User'/>
      <Route element={<Singin/>} path='/Singin'/>
      <Route element={<Singup/>} path='/Singup'/>
    </Routes>
    </HashRouter>
);

