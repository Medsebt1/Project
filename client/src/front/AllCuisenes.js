import React from "react";
import Entete from "./Entete";
import styled from "styled-components";
import { Link } from "react-router-dom";

const AllCuisenes = () => {
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
    <div className="AllCuisens">
      <Entete />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="ALLimages">
        <div>
          <StyledLink to={{ pathname: "/Amercian" }}>
            <img
              id="food"
              src="https://x.yummlystatic.com/web/bubble/cuisine/american.png"
              alt="img"
            />
            <h3 id="texte-sur-image">American</h3>
          </StyledLink>
        </div>
        <div>
          <StyledLink to={{ pathname: "/Kid-friendly" }}>
            <img
              id="food"
              src="https://x.yummlystatic.com/web/bubble/cuisine/kid-friendly.png"
              alt="img"
            />
            <h3 id="texte-sur-image">Kid-friendly</h3>
          </StyledLink>
        </div>

        <div>
          <StyledLink to={{ pathname: "/italian" }}>
            <img
              id="food"
              src="https://x.yummlystatic.com/web/bubble/cuisine/italian.png"
              alt="img"
            />
            <h3 id="texte-sur-image">Italian</h3>
          </StyledLink>
        </div>
        <div>
          <StyledLink to={{ pathname: "/Mexican" }}>
            <img
              id="food"
              src="https://x.yummlystatic.com/web/bubble/cuisine/mexican.png"
              alt="img"
            />
            <h3 id="texte-sur-image">Mexican</h3>
          </StyledLink>
        </div>
        <div>
          <StyledLink to={{ pathname: "/French" }}>
            <img
              id="food"
              src="https://x.yummlystatic.com/web/bubble/cuisine/french.png"
              alt="img"
            />
            <h3 id="texte-sur-image">French</h3>
          </StyledLink>
        </div>
        <div>
          <StyledLink to={{ pathname: "/Indian" }}>
            <img
              id="food"
              src="https://x.yummlystatic.com/web/bubble/cuisine/indian.png"
              alt="img"
            />
            <h3 id="texte-sur-image">Indian</h3>
          </StyledLink>
        </div>
        <div>
          <StyledLink to={{ pathname: "/Tunisian" }}>
            <img
              id="food"
              src="https://x.yummlystatic.com/web/bubble/cuisine/moroccan.png"
              alt="img"
            />
            <h3 id="texte-sur-image">Tunisian</h3>
          </StyledLink>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default AllCuisenes;
