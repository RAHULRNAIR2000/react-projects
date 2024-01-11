import React from 'react';
import Header from '../component/Header'
// import { Container } from 'react-bootstrap';
import Card from '../component/Card';
import '../App.css';
import './Home.scss';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



 const Home = () => {
  return (
    <>
    <Header/>
    <main className="main">
      <section className="section banner banner-section">
        <div className="container banner-column">
          <img className="banner-image" src="https://i.ibb.co/vB5LTFG/Headphone.png" alt="banner"></img>
          <div className="banner-inner">
            <h1 className="heading-xl">Experience Media Like Never Before</h1>
            <p className="paragraph">
              Enjoy award-winning stereo beats with wireless listening freedom and sleek,
              streamlined with premium padded and delivering first-rate playback.
            </p>
            <Link className="btn btn-darken btn-inline" to="/reviews">
              Write a review
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>

  )
}

export default Home;