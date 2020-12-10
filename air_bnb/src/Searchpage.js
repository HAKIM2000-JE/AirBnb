import React from "react";
import "./searchpage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
function Searchpage() {
  return (
    <div>
      <div className="searchpage_info">
        <p>62 stays ,26 august to 30 august , 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
        <SearchResult
          image="https://media.npr.org/assets/img/2019/04/30/marriott-homes-villas-2f070ea33c9015d01950ca571c3c44674f2d380b-s1300-c85.png"
          location="Private Room in Center of London"
          title="Edward house"
          description="Marriott International's Homes & Villas home-rental initiative offers luxury properties in 100 markets. "
          star={4.3}
          price="30 $ /night"
          total="177 $ total"
        />
        <SearchResult
          image="https://nordicdesign.ca/wp-content/uploads/2015/06/Best-Places-to-Rent-on-Airbnb-in-Copenhagen-11b.jpg"
          location="Private Room in Center of London"
          title="Edward house"
          star={4.3}
          price="30 $ /night"
          total="177 $ total"
        />
      </div>
    </div>
  );
}

export default Searchpage;
