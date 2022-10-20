import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaLock,
  FaFileAlt,
} from "react-icons/fa";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
const RightSideNav = () => {
  const { loginWithGoogle, setUser } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    loginWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Button
        variant="outline-primary"
        onClick={handleGoogleSignIn}
        className=""
        size="lg w-100"
      >
        <FaGoogle></FaGoogle>
        <span className="ms-2">Login via Google</span>
      </Button>
      <Button variant="outline-dark" className="mt-2" size="lg w-100">
        <FaGithub></FaGithub>
        <span className="ms-2">Login via Github</span>
      </Button>
      <div>
        <h4 className="my-3">Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="mb-3">
            <FaFacebookF />
            <span className="ms-2">Facebook</span>
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaYoutube />
            <span className="ms-2">YouTube</span>
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaTwitter />
            <span className="ms-2">Twitter</span>
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaLinkedinIn />
            <span className="ms-2">Linkedin</span>
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaWhatsapp />
            <span className="ms-2">Whatsapp</span>
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaLock />
            <span className="ms-2">Privacy Policy</span>
          </ListGroup.Item>
          <ListGroup.Item className="mb-3">
            <FaFileAlt />
            <span className="ms-2">Terms and conditions</span>
          </ListGroup.Item>
        </ListGroup>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
