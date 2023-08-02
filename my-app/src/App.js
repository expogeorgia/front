
import './App.css';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
    <div className='navbar'>
            <nav>
                <ul>
                    <li><Link className='navi' to='/Registration'>Registration</Link></li>
                    <li><Link className='navi' to='/Edit'>Edit</Link></li>
                </ul>
            </nav>
          </div>
=======
import Api from './components/Api';

function App() {
  return (
    <div className="App">
<Cards/>
<Api/>
>>>>>>> origin/main
    </div>
  );
}
export default App;
