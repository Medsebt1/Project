import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="font">
        <br />
        <br /> Get in touch
        <br />
        <br />
        <br />
        <h3 className="font">Partner Inquiries : partners@sebteats.com</h3>
        <h3 className="font">
          Advertising Inquiries : advertising@sebteats.com
        </h3>
        <h3 className="font">Job Inquiries : jobs@sebteats.com</h3>
        <h3 className="font">Help/User Support : support@sebteats.com</h3>
        <h3 className="font">
          Security Vulnerability Reports : security@sebteats.com
        </h3>
        <h3 className="font">Privacy Inquiries : privacy@sebteats.com</h3>
        <br />
        <br />
        <h6 className="font">883 E. San Carlos Ave. San Carlos, CA 94070</h6>
        <Link to={{ pathname: "/profile" }}>
          <Button variant="light">Home Page</Button>
        </Link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </h1>
    </div>
  );
};

export default Contact;
