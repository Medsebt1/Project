import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div className="TOTHome">
      <div className="Log">
        <h1 className="tit">
          Sebt<span>EATS</span>
        </h1>
      </div>
      <div className="slide">
        <Carousel>
          <Carousel.Item>
            <h1 className="title">Welcome to the best food platform ever</h1>
          </Carousel.Item>
          <Carousel.Item>
            <h1 className="title">
              Our mission is to be the smartest and most helpful food platform
              in existence
            </h1>
          </Carousel.Item>
          <Carousel.Item>
            <h1 className="title">
              We're fulfilling this mission by improving life in the kitchen for
              millions of home cooks around the world.
            </h1>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="icons">
        <div>
          <img
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"
            alt="img"
          />
          <Link to={{ pathname: "/signup" }}>
            <Button variant="warning"> USER REGISTER</Button>
          </Link>
        </div>

        <div>
          <img
            className="icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"
            alt="img"
          />{" "}
          <Link to={{ pathname: "/signin" }}>
            <Button variant="warning"> USER LOGIN</Button>
          </Link>
        </div>
      </div>
      <br />
      <br />
      <br />

      <div className="Lou">
        <div>
          <h1 className="footer">Support</h1>
          <h4 className="foo"> FAQs</h4>
          <h4 className="foo"> Privacy Policy</h4>
          <h4 className="foo">Terms & Conditions </h4>
          <h4 className="foo"> Report Piracy</h4>
          <h4 className="foo">Contact us</h4>
        </div>
        <div>
          <h1 className="footer">FOLLOW US</h1>
          <h4 className="foo"> Facebook</h4>
          <h4 className="foo"> Twitter</h4>
          <h4 className="foo">Instagram</h4>
          <h4 className="foo"> Youtube</h4>
        </div>
        <div>
          <h1 className="footer">DOWNLOAD OUR APPS</h1>
          <div>
            <h4 className="foo"> AppStore</h4>
            <img
              className="appst"
              src="https://me-static.beinstatic.com/images/apple-badge.cb24501.png"
              alt="img"
            />
          </div>
          <div>
            <h4 className="foo"> PlayStore</h4>

            <img
              className="appst"
              src="https://me-static.beinstatic.com/images/google-badge.03e68d6.png"
              alt="img"
            />
          </div>
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
    </div>
  );
};

export default Home;
