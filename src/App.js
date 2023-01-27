import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import Card from './component/Card';
import Practo from './component/Practo';

function App() {
  return (
    <div className="App">
      <Practo />
      <Navbar />
      <Main />
      <Card 
        img= "../images/female.png"
        name="Makatic"
        phone="651865148"
        email="makungongcollins@gmail.com"
      />
      <Card 
        img="../images/female.png"
        name="Don Man"
        phone="651865148"
        email="donmancollins@gmail.com"
      />
      <Card 
        img="../images/female.png"
        name="Tatang Done"
        phone="651865148"
        email="tatangdon@gmail.com"
      />
    </div>
  );
}

export default App;
