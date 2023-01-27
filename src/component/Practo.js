const Practo = () => {
    const fname = "Joe";
    const lname = "JohnMan";

    const date = new Date();
    const hours = date.getHours();
    let timeofDay;

    if (hours < 12) {
        timeofDay = "Morning";
    } else if (hours >= 12 && hours < 17) {
        timeofDay = "Afternoon"
    } else {
        timeofDay = "night";
    }

    return(
        <div>
            <h1>Hello {fname} {lname}</h1>
            <h2>The Time of the day is {timeofDay}</h2>
        </div>
        
    )
}

export default Practo