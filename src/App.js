import './App.css';
import woman from './/images/woman.png';
import email from './/images/email.svg';
import linkedin from './/images/linkedin.svg';
import twitter from './/images/twitter.svg';
import facebook from './/images/facebook.svg';
import instagram from './/images/instagram.svg';
import github from './/images/github.svg';


export default function App() {
  return (
    <div className='card'>
      <img src={woman} alt='Laura Smith' />
      <div className='introduction'>
        <h1 className='name'>Laura Smith</h1>
        <h2 className='speciality'>Frontend Developer</h2>
        <a href='#' className='website'>laurasmith.website</a>
      </div>
      <div className='buttons'>
        <a href='#' className='btn btn-mail'><img className='btn-img' src={email} alt='email' />Email</a>
        <a href='#' className='btn color-btn'> <img className='btn-img' src={linkedin} alt='linkedin' />LinkedIn</a>
      </div>
      <div className='info'>
        <h2 className='info-title'>About</h2>
        <p className='info-text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. 
          I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        <h2 className='info-title'>Interests</h2>
        <p className='info-text'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
      <div className='social'>
        <ul className='social-items'>
          <li><a href='#'> <img src={twitter} alt='twitter' /> </a></li>
          <li><a href='#'> <img src={facebook} alt='facebook' /> </a></li>
          <li><a href='#'> <img src={instagram} alt='instagram' /> </a></li>
          <li><a href='#'> <img src={github} alt='github' /> </a></li>
        </ul>
      </div>
    </div>

  );
}


