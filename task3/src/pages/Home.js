import React from 'react';
import Header from '../component/Header'
// import { Container } from 'react-bootstrap';
import Card from '../component/Card';
import '../App.css';



 const Home = () => {
  return (
    <>
    <Header/>
    <div className="section">
      
        <h1>Home</h1>
        <Card heading="Home" description="Hellow all welcome" />
        </div>
        
    </>

  )
}

export default Home;