import React from 'react'
import Navbar from "../components/Navbar";
import  AboutStyle  from "../style/AboutStyle.css"
function About() {
  return (
    <div className="parent">
        <Navbar />
        <section id="intro">
      <div className="info">
        <h1>Innovate & Invest Hub</h1>
        <p>
        Embark on a journey of entrepreneurial synergy – connecting startups with investors to catalyze innovation and drive collective success. Join us as we redefine the landscape of business opportunities.
        </p>
        
      </div>
      <div className="split-beer">
        <img
          className="beer"
          src="https://cdn.sanity.io/images/uk7b627p/production/d15d6a94cf06af317d398f79c077f0a561cb971d-990x1902.png?w=2000&q=95&auto=format" />
        <img
          className="beer"
          src="https://cdn.sanity.io/images/uk7b627p/production/15128b5d96319e675f127bbdde65f55a7f3edb8c-990x1902.png?w=2000&q=95&auto=format" />
        <img
          className="beer"
          src="https://cdn.sanity.io/images/uk7b627p/production/7779671ac301e52b8fd70307484689f7a7bd3646-990x1902.png?w=2000&q=95&auto=format" />
      </div>
    </section>

    </div>
  )
}

export default About