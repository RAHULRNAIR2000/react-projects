import React from 'react'
import Header from '../component/Header'
// import Card from '../component/Card';
import '../App.css';
import { Button } from "react-bootstrap";


const Profile = ({ logout }) => {
  return (
    <>
    <Header />
    <div className="section" style={{display:'flex',flexDirection: "column"}}>
      <diV>
      <h1>Profile</h1>
      </diV>
      <div>
      <Button onClick={logout}>Logout</Button>
      </div>
      {/* <Card heading="Profile" description="Hellow all this is profile" /> */}
       
      </div>
    </>
  )
}

export default Profile;