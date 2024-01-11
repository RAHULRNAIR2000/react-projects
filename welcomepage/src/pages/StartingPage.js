import React from 'react';
import { Link } from 'react-router-dom';
import "../StartingPage.css";
import microsoftTeamsImage from '../pages/images/MicrosoftTeams-image-transformed.jpeg';
import template2 from '../pages/images/template2.png';

const StartingPage = () => {
  return (
    <div className="template-chooser-container">
      <h1>Choose Your Template</h1>
      <div className="template-images-container">
        <Link to="/Part1" className="template-link">
          <img src={microsoftTeamsImage}  alt="Template 1" width="300" height="200" />
        </Link>
        <Link to="/Part2" className="template-link">
          <img src={template2} alt="Template 2" width="300" height="200" />
        </Link>
        <Link to="/Form" className="template-link">
          <img src="https://w3layouts.com/wp-content/uploads/2023/12/Shipper-a-transportation-category-website-template-350x219.jpg" alt="Template 3" width="300" height="200" />
        </Link>
      </div>
    </div>
  );
};

export default StartingPage;
