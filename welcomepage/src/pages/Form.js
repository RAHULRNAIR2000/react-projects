import React, { useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Part1 from './pages/Part1';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Form() {
 const [inputs, setInputs] = useState({
    hometown: "",
    education: "",
    experiance: "",
 });

 const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("answers").innerHTML = `
    <div className="additional1" id="answers">
     ${inputs.hometown}
      </div>
      <div className="education" id="smallcontainers">
        Education
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/self-study-to-motivate-and-improve-skill-development-9353716-7643603.png"
          alt="educationimage"
          className="education-image"
        />
      </div>
      <div className="experiance" id="smallcontainers">
        ${inputs.experiance}
      </div>
    `;
 };

 const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
 };

 return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="hometown" className="form-label">
            Hometown
          </label>
          <input
            type="text"
            className="form-control"
            id="hometown"
            name="hometown"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="education" className="form-label">
            Education
          </label>
          <input
            type="text"
            className="form-control"
            id="education"
            name="education"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="experiance" className="form-label">
            Experiance
          </label>
          <input
            type="text"
            className="form-control"
            id="experiance"
            name="experiance"
            onChange={handleChange}
          />
        </div>
        {/* <button type="submit" className="btn btn-primary">
          Submit
        </button> */}
         <Link  type="submit" className="btn btn-primary" to="/Part1">
              submit
            </Link>
      </form>
     
    </div>
 );
}

export default Form;