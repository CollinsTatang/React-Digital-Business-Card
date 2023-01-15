import main from './images/main.png';
import Footer from './Footer';
import './css/Main.css';

function Main() {
return(
    <main>
        <img src={main} alt="logo" className="main-photo" />
        <div className='submain'>
             <h3>Laura Smith</h3>
             <h5>Frontend Developer</h5>
             <h6>laurasmith.website</h6>
            <button className='email-btn'>Email</button>
            <button className='linkedin-btn'>Email</button>
        </div>
        <Footer />
    </main>
)
    
}

export default Main;