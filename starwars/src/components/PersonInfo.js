import React from "react";

const PersonInfo = (props) => {
    console.log("PersonInfo props", props)
    return (
        <div className="person-info">
            <h1>{props.name}</h1>
            <h2>{props.dob}</h2>
            <p>{props.homeworld}</p>
            <p>{props.species}</p>
        </div>
    )
}

export default PersonInfo;