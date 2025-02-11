import React, { useEffect, useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

// import SearchResults from "./SearchResults.js";
// import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const search = searchVal => {
    console.info("searchVal", searchVal);
    const filteredBooking = bookings.filter(booking => {
      return booking.firstName === searchVal || booking.surname === searchVal;
    });
    console.log({ filteredBooking });
    setBookings(filteredBooking);
  };

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then(res => res.json())
      .then(data => {
        setBookings(data);
      });
  }, []);

  // console.log(bookings)

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        {<SearchResults results={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
