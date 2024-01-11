import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import ScrollRevealComponent from "./ScrollRevealComponent";

const Body = () => {
  return (
    <>
      <div className="parent">
        <Navbar />
        <section className="home">
          <div className="description">
            <ScrollRevealComponent />
            <h1 className="title">
              <span className="gradient-text">Grow Professionally</span> with
              the Best
            </h1>
            <p className="paragraph">
            In a domain abundant with startup potential, aligning with investors can ignite growth. Uncover why visionaries embrace this vital link to propel their ventures forward.
            </p>

            <button type="submit" className="btn" aria-label="submit">
              <span>Learn More</span>
            </button>
          </div>

          <div className="users-color-container">
            <span className="item" style={{ "--i": 1 }}></span>
            <img
              className="item"
              src="https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-Complete-White-Dark-Background-Logo.wine.svg"
              style={{ "--i": 2 }}
              alt=""
            />
            <span className="item" style={{ "--i": 3 }}></span>
            <img
              className="item"
              src="https://images.saasworthy.com/rippling_1203_logo_1677758595_hiqou.png"
              style={{ "--i": 4 }}
              alt=""
            />

            <img
              className="item"
              src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/c79cc971959541.5bd75efd34d39.jpg"
              style={{ "--i": 10 }}
              alt=""
            />
            <span className="item" style={{ "--i": 11 }}></span>
            <img
              className="item"
              src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Twitch_Logo.jpg"
              style={{ "--i": 12 }}
              alt=""
            />
            <span className="item" style={{ "--i": 5 }}></span>

            <span className="item" style={{ "--i": 9 }}></span>
            <img
              className="item"
              src="https://images.ctfassets.net/c5bd0wqjc7v0/3dFdY6GvgLgCIXmBiN6eiA/d4acc5d4c5d557566cf0e46f9b58de43/icon-buy-and-sell.svg"
              style={{ "--i": 8 }}
              alt=""
            />
            <span className="item" style={{ "--i": 7 }}></span>
            <img
              className="item"
              src="https://mir-s3-cdn-cf.behance.net/projects/404/b9336c93700473.Y3JvcCwxNzM2LDEzNTcsMCwxNzE.png"
              style={{ "--i": 6 }}
              alt=""
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Body;
