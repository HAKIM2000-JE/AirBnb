import React, { useState } from "react";
import "./search.css";
//main style file
import "react-date-range/dist/styles.css";
//theme css file
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  //   new Date --> Today
  const [endDate, setEndDate] = useState(new Date());
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  //When selcting a date run this function
  const handlselect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <div className="search">
      {/* Building the date picker */}
      <DateRangePicker ranges={[selectionRange]} onChange={handlselect} />
      <h2>
        Number of guests
        <PeopleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button>Search Air bnb</Button>
    </div>
  );
}

export default Search;
