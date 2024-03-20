import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from '../Pages/AboutUs/AboutUs';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Home from '../Pages/Home/Home';
import OurTeams from '../Pages/OurTeams/OurTeams';
import Portofolio from '../Pages/Portofolio/Portofolio';
import PortofolioDetails from '../Pages/Portofolio/PortofolioDetails';
import Services from '../Pages/Services/Services';

const RouterLayout = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/aboutus" element={<AboutUs />} />
            <Route exact path='/services' element={<Services />} />
            <Route exact path='/ourteams' element={<OurTeams />} />
            <Route exact path='/portofolio' element={<Portofolio />} />
            <Route exact path='/portofoliodetails' element={<PortofolioDetails />} />
            <Route exact path='/contactus' element={<ContactUs />} />
        </Routes>
    )
}

export default RouterLayout