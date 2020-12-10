import React from "react";
import "./home.css";
import Banner from "./Bnner";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <Banner />
      {/* One section contain 3 cards */}
      <div className="home_section">
        <Card
          src="https://cdn.vox-cdn.com/thumbor/R2WcPyr6pJuxOPfn8YBz_yorjIU=/0x0:2000x1118/1200x800/filters:focal(840x399:1160x719)/cdn.vox-cdn.com/uploads/chorus_image/image/52264099/The_Terrace_Sicilian__1_.1497897195.jpg"
          title="Online Experience"
          description="le House within garden propose un hébergement à Volos, à 3,1 km du stade Panthessaliko et du musée archéologique Athanasakeion de Volos."
        />
        <Card
          src="https://www.scandinaviastandard.com/wp-content/uploads/2019/11/Airbnb-Copenhagen-The-Best-Copenhagen-Airbnbs-in-Every-Neighborhood-Scandinavia-Standard-2.jpg"
          title="Online Experience"
          description="le House within garden propose un hébergement à Volos, à 3,1 km du stade Panthessaliko et du musée archéologique Athanasakeion de Volos."
        />
        <Card
          src="https://nordicdesign.ca/wp-content/uploads/2015/06/Best-Places-to-Rent-on-Airbnb-in-Copenhagen-11b.jpg"
          description="le House within garden propose un hébergement à Volos, à 3,1 km du stade Panthessaliko et du musée archéologique Athanasakeion de Volos."
          title="Online Experience"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://cdn.vox-cdn.com/thumbor/R2WcPyr6pJuxOPfn8YBz_yorjIU=/0x0:2000x1118/1200x800/filters:focal(840x399:1160x719)/cdn.vox-cdn.com/uploads/chorus_image/image/52264099/The_Terrace_Sicilian__1_.1497897195.jpg"
          title="Online Experience"
          description="le House within garden propose un hébergement à Volos, à 3,1 km du stade Panthessaliko et du musée archéologique Athanasakeion de Volos."
        />
        <Card
          src="https://www.scandinaviastandard.com/wp-content/uploads/2019/11/Airbnb-Copenhagen-The-Best-Copenhagen-Airbnbs-in-Every-Neighborhood-Scandinavia-Standard-2.jpg"
          title="Online Experience"
          description="le House within garden propose un hébergement à Volos, à 3,1 km du stade Panthessaliko et du musée archéologique Athanasakeion de Volos."
        />
        <Card
          src="https://nordicdesign.ca/wp-content/uploads/2015/06/Best-Places-to-Rent-on-Airbnb-in-Copenhagen-11b.jpg"
          description="le House within garden propose un hébergement à Volos, à 3,1 km du stade Panthessaliko et du musée archéologique Athanasakeion de Volos."
          title="Online Experience"
        />
      </div>
    </div>
  );
}

export default Home;
