import "../scss/recommended.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faFilm, faTv } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export const Recommended = ({ movies, changeBookmark }) => {
  return (
    <div className="recommneded-wrapper">
      <h1 className="trending-title main-title">Recommended for you</h1>
      <div className="films-grid">
        {movies.slice(9, 17).map((item) => {
          return (
            <div className="film" key={item.id}>
              <div className="film-image">
                <img src={item.thumbnail.regular.small} alt="grid film img" />
                <button
                  className="bookmark-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    changeBookmark(item.id); // Przekazujemy id filmu
                  }}
                  data-marked={item.isBookmarked ? "true" : "false"}
                >
                  <FontAwesomeIcon icon={faBookmark} />
                </button>
              </div>
              <p className="film-info">
                {item.year} &bull;{" "}
                <FontAwesomeIcon
                  icon={item.category === "Movie" ? faFilm : faTv}
                />{" "}
                {item.category} &bull; {item.rating}
              </p>
              <p className="film-title">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Recommended.propTypes = {
  movies: PropTypes.array,
  changeBookmark: PropTypes.func,
};
