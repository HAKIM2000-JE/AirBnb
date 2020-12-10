import React from "react";
import "./searchresult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StartIcon from "@material-ui/icons/Star";
function SearchResult({
  image,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="cur" className="searchresult">
      <img src={image} alt="" />
      <FavoriteBorderIcon className="searchresult_heart" />
      <div className="searchresult_info">
        <div className="info_top">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>

          <p className="desc">{description} </p>
        </div>
        <div className="info_bottom">
          <div className="star">
            <StartIcon />
            <p>
              <strong>{star} </strong>
            </p>
          </div>
          <div className="searchresult_price">
            <h2>{price} </h2>
            <p> {total} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
