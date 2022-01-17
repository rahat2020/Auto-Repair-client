import React from 'react';
import PopularNews from '../../News/PopularNews/PopularNews';
import Appointment from '../Appointment/Appointment';
import FAQ from '../FAQ/FAQ';
import Features from '../Features/Features';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurMotto from '../OurMotto/OurMotto';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import TeamMembers from '../TeamMembers/TeamMembers';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Header />
            <OurMotto/>
            <Features />
            <WhyChoose />
            <Services />
            <Products/>
            <FAQ />
            <PopularNews />
            <Reviews/>
            <TeamMembers/>
            <Appointment/>
            <Footer />
        </div>
    );
};

export default Home;