import React from 'react'
import  StartupStyle  from "../style/StartupStyle.css"
import Navbar from "../components/Navbar";


const Investors = () => {
    const jobData = [
        { title: 'BlackRock', company: '$81.27 B', location: '🇺🇸 USA' },
        { title: 'Prosus', company: '$141.83 B', location: '🇳🇱 Netherlands' },
        { title: 'KKR & Co.', company: '$88.20 B', location: '🇺🇸 USA' },
        { title: 'Equinix', company: '$75.27 B', location: '🇺🇸 USA' },
        { title: 'SoftBank', company: '$57.41 B', location: '🇯🇵 Japan' },
        { title: 'Digital Realty', company: '$41.70 B', location: '🇺🇸 USA' },
        { title: '3i Group', company: '$28.72 B', location: '🇬🇧 UK' },
        { title: 'Exor', company: '$34.66 B', location: '🇳🇱 Netherlands' },
        { title: 'Sumitomo', company: '$25.82 B', location: '🇯🇵 Japan' },
        { title: 'Markel', company: '$18.16 B', location: '🇺🇸 USA' },
        { title: 'Principal', company: '$17.91 B', location: '🇺🇸 USA' },
        { title: 'SEGRO', company: '$12.85 B', location: '🇬🇧 UK' }
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

export default Investors
