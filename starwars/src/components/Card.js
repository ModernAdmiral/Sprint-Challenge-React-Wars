import React from 'react';
import styled from "styled-components";

const Card = props => {
    console.log(props)
    const CharacterCard = styled.div`
        border: solid 2px;
        width: 250px;
        margin: 15px;
        border-radius: 20px;
        background-color: grey;
        color: white;
    `

    return (
        <CharacterCard>
            <h2>{props.name}</h2>
            <h3>Birth Year: {props.birth_year}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Height: {props.height}</h3>
        </CharacterCard>
    )
}

export default Card;