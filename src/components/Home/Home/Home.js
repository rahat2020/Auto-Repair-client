import React from 'react';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Header/>
            <Features/>
            <WhyChoose/>
            <Footer/>
        </div>
    );
};

export default Home;