import logo from "../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHouse,
  faFilm,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import "../scss/nav-bar.scss";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <nav className="nav-bar">
      <div className="upper-options">
        <img src={logo} alt="main-logo-home-btn" />
        <ul className="option-list">
          <Link to={"/"} className="option">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <Link to={"/movies"} className="option">
            <FontAwesomeIcon icon={faFilm} />
          </Link>
          <Link to={"/series"} className="option">
            <FontAwesomeIcon icon={faTv} />
          </Link>
          <Link to={"/bookmarked"} className="option">
            <FontAwesomeIcon icon={faBookmark} />
          </Link>
        </ul>
      </div>
      <img src="assets/image-avatar.png" alt="user pfp" className="user-pfp" />
    </nav>
  );
};

// linki zrobic
