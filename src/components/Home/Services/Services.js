import React from "react";
import fluoride from "../../../images/Fluoride.png";
import cavity from "../../../images/Cavity.png";
import whitening from "../../../images/Whitening.png";
import ServiceDetails from "../ServiceDetails/ServiceDetails";

const Services = () => {
  const serviceData = [
    {
      name: "Fluoride Treatment",
      image: fluoride,
      description: "",
    },
    {
      name: "Cavity Filling",
      image: cavity,
      description: "",
    },
    {
      name: "Teeth Whitening",
      image: whitening,
      description: "",
    },
  ];
  return (
    <div className="service-container mt-5">
      <div className="text-center">
        <h5 style={{ color: "#1CC7C1" }}>Our Services</h5>
        <h2>Services We Provide</h2>
      </div>
      <div className="d-flex justify-content-center">
        <div className="w-75 row">
          {
            serviceData.map((serviceData) => (<ServiceDetails serviceData={serviceData}></ServiceDetails>))
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
