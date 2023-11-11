import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/auth");
  };
  return (
    <div className="navbar">
      <Link to="/" className="title">NorthIndianRecipes.net</Link>
      <Link to="/create-recipe" className="menu">Create Recipe</Link>
      <Link to="/saved-recipes" className="menu">Saved Recipes</Link>
      {!cookies.access_token ? (
        <Link to="/auth " className="menu">Login/Register</Link>
      ) : (
        <button onClick={logout}> Logout </button>
      )}
    </div>
  );
};
