import React from 'react';
import App from '../App';
import Animation from './animation';
import './singin.css'

const Singin = () => {
    return (
        <div className='container'>
        <App/>
        <Animation>
        <div className='singin'>
        <form className='singin-form'>
        <input type='username' placeholder="Enter Username"/>
        <input type='password' placeholder="Enter Password"/>
        <button type="submit" className='singin-submit'>Submit</button>
        </form>
        </div>
        </Animation>
        </div>
    );
}

export default Singin;
