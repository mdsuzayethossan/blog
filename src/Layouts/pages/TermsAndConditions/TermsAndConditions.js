import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
const TermsAndConditions = () => {
  return (
    <div>
      <h3>Terms And Conditions will be start here</h3>
      <Link className="text-white text-decoration-none" to="/register">
        <Button variant="primary">Go Back to Register</Button>
      </Link>
    </div>
  );
};

export default TermsAndConditions;
