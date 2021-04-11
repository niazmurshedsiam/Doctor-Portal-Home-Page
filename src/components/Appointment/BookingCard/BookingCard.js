import React from "react";
import '../../../App.css';
const BookingCard = ({ booking }) => {
  return (
    <div className="col-md-4 mb-5">
      <div className="card p-3">
        <div className="card-body text-center">
          <h5 className="card-title text-brand">{booking.subject}</h5>
          <p>{booking.visitingHour}</p>
          <p>{booking.totalSpace} SPACES AVAILABLE</p>
          <br />
          <button className="btn btn-brand text-uppercase">BOOK APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
