import React from 'react'
import  StartupStyle  from "../style/StartupStyle.css"
import Navbar from "../components/Navbar";


const Startup = () => {
    const jobData = [
        { title: 'Stripe', company: 'Fintech', location: 'San Francisco' },
        { title: 'OpenSea', company: 'NFT', location: 'California' },
        { title: 'Deel', company: 'HR management', location: 'Texas' },
        { title: 'Flexport', company: 'Logistics', location: 'California' },
        { title: 'Razorpay', company: 'Fintech', location: 'India' },
        { title: 'Scale AI', company: 'AI', location: 'New York' },
        { title: 'Rappi', company: 'Fintech', location: 'New York' },
        { title: 'Meesho', company: 'Ecommerce', location: 'India' },
        { title: 'Webflow', company: 'Web-designing', location: 'New York' },
        { title: 'IronClad', company: 'Legal', location: 'USA' },
        { title: 'Groww', company: 'Stock Market', location: 'India' },
        { title: 'Docker', company: 'Software development', location: 'USA' }
     ];
  return (

    <div className="parent">
    <Navbar />
    <div className='main-container'>
        <div className='search-type'>
        </div>
        
        <div className='searched-jobs'>
        <div className='card-container'>
            {jobData.map((job, index) => (
              <div key={index} className='card'>
                <h2>{job.title}</h2>
                <h3>{job.company}</h3>
                <p>{job.location}</p>
              </div>
            ))}
          </div>
        </div>


    </div>
    </div>
  )
}

export default Startup
