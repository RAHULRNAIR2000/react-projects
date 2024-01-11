import React from 'react'
import Navbar from "../components/Navbar";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faTwitter, faCodepen, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
// import  ProfileStyle  from "../style/ProfileStyle.css"

function Profile({ logout }) {
  return (
  <div className='profileparent'>
    <Navbar />
    <main className="profile">
      <div className="profile-bg"></div>
      <section className="profilecontainer">
        <aside className="profile-image">
          <a className="camera" href="#">
            {/* <FontAwesomeIcon icon={faCamera} /> */}
          </a>
        </aside>
        <section className="profile-info">
          <h1 className="first-name">Angela</h1>
          <h1 className="second-name">Yun He</h1>
          <h2>ABOUT</h2>
          <p>
            hello hello, I'm angela, artist and developer 🌼 student at stanford; intern at zynga 🌱 happy to be here! 🌿 let's code the best we can!
          </p>
          <aside className="social-media-icons">
            <a href="https://twitter.com/zephybite" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://codepen.io/zephyo" target="_blank">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
            <a href="https://github.com/zephyo" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://medium.com/@zephyo" target="_blank">
              <FontAwesomeIcon icon={faMedium} />
            </a>
          </aside>
        </section>
      </section>
      <section className="statistics">
        <button className="icon arrow left">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <button className="icon arrow right">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <p><strong>29</strong> Followers</p>
        <p><strong>184</strong> Following</p>
        <p><strong>6</strong> Likes</p>
      </section>
      <button className="icon close">
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </main>
    {/* <div className='d-flex align-items-center justify-content-center'>
    <Button onClick={logout}>Logout</Button>
    </div> */}
   </div>
  )
}

export default Profile