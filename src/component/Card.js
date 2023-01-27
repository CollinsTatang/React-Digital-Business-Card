import "./css/Card.css"

const Card = () => {
    return (
        <div className="card">
            <img src={require('../images/male.jpg')} alt="Not found" className="card--pic" />
            <div className="card--stats">
                <img src={require('../images/start.png')} alt="Not found" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) * </span>
                <span className="gray">USA</span>
            </div>
            <p>Life lessons of Kadic Magarnal</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;