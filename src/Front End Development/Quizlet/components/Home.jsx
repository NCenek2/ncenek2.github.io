import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <h2>Welcome to Rigel</h2>
      <div className="home-btn-container">
        <Link to={"/rigel/login"} className="btn btn-green">
          Login
        </Link>
        <Link to={"/rigel/register"} className="btn add-color">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;
