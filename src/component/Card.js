import "./css/Card.css"

const Card = ({img, name, phone, email}) => {

    return (
        <div className="card">
            <img src={img} alt="Not found" className="card--pic" />
            <h3>{name}</h3>
            <div className="card--stats">
                <img src={require('../images/start.png')} alt="Not found" className="card--star"/>
                <span>{phone}</span>
                <span className="gray">(6) * </span>
                <span className="gray">{email}</span>
            </div>
            <p>Life lessons of Kadic Magarnal</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card;