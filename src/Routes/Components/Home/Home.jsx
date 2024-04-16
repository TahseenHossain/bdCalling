import React from 'react';
import Banner from './Banner';
import Offer from './Offer';
import Events from './Events';
import Scanner from './Scanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Events></Events>
            <Offer></Offer>
            <Scanner></Scanner>

        </div>
    );
};

export default Home;