import React, {useEffect, useState} from 'react';
import Card from './components/Card';
import axios from 'axios';
import './App.css';
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([])

  const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 10%;
    margin-right: 10%;
  `;


    useEffect(() => {
    axios 
      .get(`https://swapi.co/api/people/`)
      .then(response => {
          console.log(response.data.results)
        setData(response.data.results)
      })
      .catch(error => console.log("The data was not returned", error));
  }, [])



  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Cards>
        {data.map( e => {
        return <Card 
          name={e.name}
          birth_year={e.birth_year}
          gender={e.gender}
          height={e.height}
        />
        })}
      </Cards>
    </div>
  );
}

export default App;
