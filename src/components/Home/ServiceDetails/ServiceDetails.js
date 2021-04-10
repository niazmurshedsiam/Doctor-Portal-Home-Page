import React from 'react';

const ServiceDetails = ({serviceData}) => {
    return (
        <div className="col-md-4 mt-5 text-center">
            <img style={{height:'50px'}} src={serviceData.image} alt=""/>
            <h5 className="text-secondary mt-3 mb-3">{serviceData.name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, odio.</p>
        </div>
    );
};

export default ServiceDetails;