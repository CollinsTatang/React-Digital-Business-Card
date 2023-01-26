import main from './images/main.png';
import Footer from './Footer';
import './css/Main.css';

function Main() {
return(
    <main>
        <img src={main} alt="logo" className="main-photo" />
        <div className='mainContent'>
            <div className='submain'>
                <h3>Laura Smith</h3>
                <h5>Frontend Developer</h5>
                <h6>laurasmith.website</h6>
                <button className='email-btn'>Email</button>
                <button className='linkedin-btn'>Email</button>
            </div>
            <div className="content">
                <h3>About</h3>
                <p>I am a frontend developer with a particular
                interest in making things simple and automating
                daily tasks. I try to keep up with security and 
                best practices, and am always looking for new things to learn.
                </p>
                <h3>Interests</h3>
                <p>Food expert. Music scholar. Reader. 
                    Internet fanatic. Bacon buff. Entrepreneur. 
                    Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </div>,
        <Footer />
    </main>
)
    
}

export default Main;