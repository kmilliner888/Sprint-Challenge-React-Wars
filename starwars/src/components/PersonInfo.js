import React from "react";
import styled from "styled-components";

const InfoContainer = styled.div `
    padding: 1rem;
    margin: 2rem;
    background: black;
    color: white;
    border-radius: 1rem;
    opacity: .75;
`;

const InfoLinks = styled.a `
    text-decoration: none;
    color: black;
`;

const InfoButton = styled.button  `
    background: white;
    border-radius: 1rem;
    margin: .5rem;
`;



const PersonInfo = (props) => {
    console.log("PersonInfo props", props)
    return (
        <InfoContainer>
            <h1>{props.name}</h1>
            <h2>Born: {props.dob}</h2>
            <InfoButton><InfoLinks href={props.homeworld}>Homeworld</InfoLinks></InfoButton>
            <br></br>
            <InfoButton><InfoLinks href={props.species}>Species</InfoLinks></InfoButton>
        </InfoContainer>
    )
}

export default PersonInfo;