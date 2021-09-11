import React from 'react';
import FAQ from '../FAQ/FAQ';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Header/>
            <Features/>
            <WhyChoose/>
            <Services/>
            <FAQ/>
            <Footer/>
        </div>
    );
};

export default Home;