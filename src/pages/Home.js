import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import FoodMain from './FoodMain';
import DeliveryPage from './DeliveryPage';

const Home = () => {
    return (
        <>
            <Banner/>
            <FoodMain/>
            <DeliveryPage/>
        </>
    )
}

export default Home;
