import React from 'react';
import InfoCart from '../InfoCart/InfoCart';
import { faClock,faMapMarker,faPhone } from "@fortawesome/free-solid-svg-icons";
const BusinessInfo = () => {
    const info =[
        {
            title: 'Opening Hours',
            description: 'We are open 7 days',
            icon: faClock,
            background: 'primary'

        },
        {
            title: 'Visit Our Location',
            description: 'Brooklyn, Ny 10003, USA',
            icon: faMapMarker,
            background: 'dark'

        },
        {
            title: 'Call us now',
            description: '+156846464463',
            icon: faPhone,
            background: 'primary'

        }
    ]
    return (
        <section className="d-flex justify-content-center">
            <div className="w-75 row"> 
            {
                info.map(infoDetail => <InfoCart InfoCart={infoDetail}></InfoCart>)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;