import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-950 py-5">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-white font-medium text-xl">Contact Me!</h1>
          </div>
          <div className="text-white text-4xl mb-4">
            {/* Github Icon */}
            <Link className="me-4" to={`https://github.com/Fram3y`}>
              <FontAwesomeIcon icon={faGithub} />
            </Link>

            {/* LinkedIn Icon */}
            <Link className="me-4" to={`www.linkedin.com/in/sam-downey-910999239`}>
              <FontAwesomeIcon icon={faLinkedin} />
            </Link>

            {/* Twitter Icon */}
            <Link className="me-4" to={`https://twitter.com/Fram3y_`}>
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>

            {/* Instgram Icon */}
            <Link className="me-4" to={`https://www.instagram.com/mi1k_demon/`}>
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
