import React from 'react';
import { Card as CardBootstrap, } from 'react-bootstrap';
import '../App.css';


const Card = ({ heading, description }) => {
 return (
    <CardBootstrap className="card text-center"  style={{ minHeight: '40vh' }}>
      <CardBootstrap.Body className="card-body">
        <CardBootstrap.Title className="card-title">{heading}</CardBootstrap.Title>
        <CardBootstrap.Text className="card-text">{description}</CardBootstrap.Text>
      </CardBootstrap.Body>
    </CardBootstrap>
 );
};

export default Card;