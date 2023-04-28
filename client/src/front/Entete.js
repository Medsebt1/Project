import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch } from "react-redux";
import { Logout } from "../redux/actions";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";

const Entete = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(Logout());
    <Redirect to="/signup"></Redirect>;
  };
  const StyledLink = styled(Link)`
    text-decoration: none;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      outline: none;
    }
  `;
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <StyledLink to={{ pathname: "/profile" }}>
            <Navbar.Brand href="#home">
              <div className="Log">
                <h1>
                  Sebt<span>EATS</span>
                </h1>
              </div>
            </Navbar.Brand>
          </StyledLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <StyledLink to={{ pathname: "/Popular_Meals" }}>
                <Navbar.Brand href="#Populars_Meals">
                  <div>
                    <h1>Popular Meals </h1>
                  </div>
                </Navbar.Brand>
              </StyledLink> */}
              <Nav.Link href="#Popular_Meals">
                <StyledLink
                  className="texttt"
                  to={{ pathname: "/Popular_Meals" }}
                >
                  Popular Meals{" "}
                </StyledLink>
              </Nav.Link>
              <StyledLink to={{ pathname: "/MyProfile" }}>
                <Nav.Link href="#Profile">Profile</Nav.Link>
              </StyledLink>
              {/* <Nav.Link to="/MyProfile" href="#Profile">
                Profile
              </Nav.Link> */}
              <StyledLink to={{ pathname: "/AllCuisines" }}>
                <Nav.Link href="#All_Cuisines">All Cuisines</Nav.Link>
              </StyledLink>
              {/* <StyledLink to={{ pathname: "/MealPlanner" }}>
                <Nav.Link href="#Meal Planner">Meal Planner</Nav.Link>
              </StyledLink> */}
              <Nav.Link href="#Meal_Planner">Meal Planner</Nav.Link>
            </Nav>
            <Nav>
              <StyledLink to={{ pathname: "/Contact" }}>
                <Nav.Link className="contact_Us" href="#Contact_Us">
                  Contact Us
                </Nav.Link>
              </StyledLink>
              <Nav.Link eventKey={2} href="#Log_OUT">
                <button onClick={handleLogout}>LogOUT</button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Entete;
