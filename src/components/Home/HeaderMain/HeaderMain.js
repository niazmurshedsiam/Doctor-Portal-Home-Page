import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main className="row">
            <div className="col-md-4 offset-md-1">
                <h1>Your Name Smile <br/> Start Here</h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam aspernatur, accusamus eum libero perspiciatis.</p>
                <button className="btn btn-primary">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;