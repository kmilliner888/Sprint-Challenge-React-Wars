import React, { useState, useEffect } from "react";
import PersonInfo from "./PersonInfo";
import axios from "axios";



const PersonCard = () => {
    const [person, setPerson] = useState([]);

    useEffect(() => {
        axios
        .get("https://swapi.co/api/people/")
        .then(response => {
            setPerson(response.data.results);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);
    // console.log("PersonCard person", person)

    return (
        <div>
            {person.map((character, id)=> {
                return <PersonInfo key={id} name={character.name} dob={character.birth_year} homeworld={character.homeworld} species={character.species}/>;
            })}
        </div>
    )
}

export default PersonCard;