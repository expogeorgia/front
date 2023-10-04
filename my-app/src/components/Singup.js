import React from 'react';
import App from '../App';
import Animation from './animation';

const Singup = () => {
    return (
        <div className='container'>
        <App/>
        <Animation>
        <div className='singin'>
        <form className='singin-form'>
        <input type='username' placeholder="Enter Username"/>
        <input type='text'placeholder="Enter FirstName" />
        <input type='text'placeholder="Enter LastName" />
        <input type='email' placeholder="Enter Email"/>
        <input type='password' placeholder="Enter Password"/>
        <input type='password' placeholder="Enter Password"/>
        <button type="submit" className='singin-submit'>Submit</button>
        </form>
        </div>
        </Animation>
        </div>
    );
}

export default Singup;
