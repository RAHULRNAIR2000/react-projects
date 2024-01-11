import React from 'react'
import Header from '../component/Header'
import Card from '../component/Card';
import '../App.css';


const Services = () => {
  return (
    <>
     <Header />
     <div className="section">
      <h1>Services</h1>
      <Card heading="Services" description="Hellow all this is services" />
       
      </div>
    </>
  )
}

export default Services