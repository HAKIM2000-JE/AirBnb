import React, { useState } from "react";
import "./banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { Link, useHistory } from "react-router-dom";

function Bnner() {
  const history = useHistory();
  const [search, setsearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        <Button
          variant="outlined"
          className="banner_searchbutton"
          onClick={() => {
            setsearch(!search);
          }}
        >
          {search ? "Hide" : "Search Date"}
        </Button>
        {search && <Search />}
      </div>
      <div className="banner_info">
        <h1>Get out and Stretch your imagination</h1>
        <h5>
          plan a different kind of getway to uncover the hidden gems near you
        </h5>
        <Link to="/search">
          <div className="btn">Explore Nearby</div>
        </Link>
      </div>
    </div>
  );
}

export default Bnner;
