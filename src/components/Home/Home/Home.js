import React from 'react';
import PopularNews from '../../News/PopularNews/PopularNews';
import FAQ from '../FAQ/FAQ';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import TeamMembers from '../TeamMembers/TeamMembers';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Header />
            <Features />
            <WhyChoose />
            <Services />
            <FAQ />
            <PopularNews />
            <Reviews/>
            <TeamMembers/>
            <Footer />
        </div>
    );
};

export default Home;