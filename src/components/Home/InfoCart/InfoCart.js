import React from "react";
import './InfoCart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const InfoCart = ({ InfoCart }) => {
  return (
    <div className="col-md-4 text-white info-cart">
      <div className={`d-flex justify-content-center info-container info-${InfoCart.background}`}>
        <div>
          <FontAwesomeIcon className="info-icon mr-3" icon={InfoCart.icon}></FontAwesomeIcon>
        </div>
        <div>
          <h6>{InfoCart.title}</h6>
          <small>{InfoCart.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCart;
