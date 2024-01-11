import { BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import React from 'react';
import  Home  from "./pages/Home";
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 
// import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import './App.css';
import { useState } from "react";
import { Login } from "./pages/Login";


export function App() {
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
          <Route
            path="profile"
            element={<Profile logout={() => setUser(false)} />}
          />
        ) : (
          <Route path="profile" element={<Navigate to="/" />} />
        )}

      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="profile" element={<Profile/>}/>
     


     </Routes>
    </BrowserRouter>
  );
}

export default App;
