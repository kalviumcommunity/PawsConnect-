import { Link } from 'react-router-dom';
import { DarkModeToggle } from '../components/DarkModeToggle';
import '../components/About.css';

function AboutUs() {
  return (
    <>
      <nav>
        <div className='navbar'>
          <Link to="/" className='title'><h1>Serenity Steps</h1></Link>
          <DarkModeToggle />
          <div className="button-group">
            <Link to="/Signup"><button className='signUpbtn'>Signup</button></Link>
            <Link to="/Login"><button className='loginbtn'>Login</button></Link>
          </div>
        </div>  
      </nav>

      <div className='aboutus-container'>
        <div className='au-container'>
          <div><h1 className='info'>About Paws Connect</h1></div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
