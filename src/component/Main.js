import './css/Main.css';

const Main = () => {
    return(
        <main>
            <img src={require('../images/hellep.png')} alt="Not found" className="main--pic" />
            <h1 className='main--header'>Online Expirence</h1>
            <p className='main--paragraph'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </main>
    )
}

export default Main;