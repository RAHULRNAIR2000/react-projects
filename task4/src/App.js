import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import React from 'react';
import  Home  from "./pages/Home";
import About from "./pages/About"; 
import Reviews from "./pages/Reviews"; 
import './App.css';
import { useState } from "react";
import StarReviews from "./pages/StarReviews";
import { RecoilRoot } from 'recoil';




export function App() {
 
  return (
    <RecoilRoot>

    <BrowserRouter>
    
     <Routes>
    
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="reviews" element={<Reviews/>}/>
      <Route path="starreviews" element={<StarReviews/>}/>
      {/* <Route path="profile" element={<Profile/>}/> */}
     


     </Routes>
    </BrowserRouter>
    </RecoilRoot>

  );
}

export default App;
