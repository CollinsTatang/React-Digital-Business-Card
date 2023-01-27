import "./css/Card.css"

const Card = (props) => {

    return (
        <div className="card">
            <img src={props.img} alt="Not found" className="card--pic" />
            <h3>{props.name}</h3>
            <div className="card--stats">
                <img src={require('../images/start.png')} alt="Not found" className="card--star"/>
                <span>{props.phone}</span>
                <span className="gray">(6) * </span>
                <span className="gray">{props.email}</span>
            </div>
            <p>Life lessons of Kadic Magarnal</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;