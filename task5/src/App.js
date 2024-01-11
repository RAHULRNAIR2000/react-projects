import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import React from 'react';
import  Home  from "./pages/Home";
// import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  About  from "./pages/About"
import  Login  from "./pages/Login"
import Startup from "./pages/Startup";
import Investors from "./pages/Investors";
import Profile from "./pages/Profile";
import { useState } from "react";


function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
    
     <Routes>
    
      <Route index element={<Home/>}/>
      {!user && (
          <Route
            path="login"
            element={<Login authenticate={() => setUser(true)} />}
          />
        )}

      {user ? (
        <>
          <Route
            path="profile"
            element={<Profile logout={() => setUser(false)} />}
            
          />
          <Route path="login" element={<Navigate to="/profile" />} />
          </>
        ) : (
          <Route path="profile" element={<Navigate to="/login" />} />
        )}
      <Route path="about" element={<About/>}/>
      
      <Route path="startup" element={<Startup/>}/>
      <Route path="investors" element={<Investors/>}/>
      <Route path="profile" element={<Profile/>}/>
      {/* <Route path="reviews" element={<Reviews/>}/>
      <Route path="starreviews" element={<StarReviews/>}/> */}
      {/* <Route path="profile" element={<Profile/>}/> */}
     


     </Routes>
    </BrowserRouter>
   
  );
}

export default App;
