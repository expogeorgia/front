import React from 'react';
import App from '../App';
import Animation from './animation';

const Singin = () => {
    return (
        <div className='container'>
        <App/>
        <Animation>
        <div className='singin'>
        <input type='username'/>
        <input type='password'/>
        </div>
        </Animation>
        </div>
    );
}

export default Singin;
