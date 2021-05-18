import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom'


const PokeCard = (pokemon) => {

  if (pokemon.pokemon.name) {
    return (
    <div className="m-2 ">
        <Card style={{ width: "18rem", padding: "30px" }}>
            <Card.Body>
            <Card.Title>
                <b>{pokemon.pokemon.name}</b>
            </Card.Title>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    </div>
    );
  }

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Text>Loading</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default PokeCard;
