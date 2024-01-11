import React from 'react'
import Header from '../component/Header'
import Card from '../component/Card';
import { useRecoilState } from 'recoil';
import { starReviewsState } from '../states/StarReviewsState';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



const Reviews = () => {
  const [starReviews, setStarReviews] = useRecoilState(starReviewsState);

 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStarReviews({ ...starReviews, [name]: value });
 };

  return (
    <>
      <Header />
      <div className="section">
      
      <br></br>
      <div className='form'>
          <label>Name</label><br></br>
          <input name="name" className="wide-input" onChange={handleInputChange} value={starReviews.name} /><br></br>
          <label>Write your review</label><br></br>
          <input name="review" className="wide-input1" onChange={handleInputChange} value={starReviews.review} /><br></br>
          <Link className="btn btn-darken btn-inline" to="/starreviews">
              submit
            </Link>
        </div>       
      </div>
    </>
  )
}

export default Reviews;