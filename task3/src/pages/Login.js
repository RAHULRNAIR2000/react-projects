import React from "react";
import Header from "../component/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Login = ({ authenticate }) => {
  const navigate = useNavigate();
  const onClick = () => {
    authenticate();
    navigate("/profile");
  };
  return (
    <>
      <Header />
      <div className="section">
        {/* <h1>Login</h1> */}
        <Button className="button" onClick={onClick}>
          Log In
        </Button>
      </div>
    </>
  );
};

// export default Login;
