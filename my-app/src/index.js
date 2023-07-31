import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Api from './components/Api';
import Registration from './components/Registration';
import Admin from './components/Admin';
import Edit from './components/Edit';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
    <Routes>
      <Route element={<Edit/>} path='/' exact="true"/>
      <Route element={<Api/>} path='/api'/>
      <Route element={<Registration/>} path='/Registration'/>
      <Route element={<Admin/>} path='/Admin'/>
      <Route element={<Edit/>} path='/Edit'/>
    </Routes>
    </HashRouter>
);

