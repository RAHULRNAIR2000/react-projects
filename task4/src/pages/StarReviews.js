import React from 'react'
import Header from '../component/Header'
import Card from '../component/Card';
import '../App.css';
import { useRecoilValue } from 'recoil';
import { starReviewsState } from '../states/StarReviewsState';

const StarReviews = () => {
    const starReviews = useRecoilValue(starReviewsState);

  return (
    <>
      <Header />
      <div className="container-fluid" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '90.25vh',backgroundColor:"black"}}>
     <div className="row">
        <div className="col-sm">
            <h1 style={{color:"white"}}>Star Reviews</h1>
            <p style={{color:"white"}}>Name: {starReviews.name}</p>
            <p style={{color:"white"}}>Review: {starReviews.review}</p>
        </div>
    </div>
</div>
    </>
  )
}

export default StarReviews;