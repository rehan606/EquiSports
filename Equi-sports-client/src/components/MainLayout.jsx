import React from 'react';
import Navbar from './Navbar';
import Slide from './Slider';
import Footer from './Footer';
import Testimonial from './Testimonial';
import Service from './Service';
import { Outlet } from 'react-router-dom';
import Categories from './Categories';

const MainLayout = () => {
    return (
        <div>
            <header >
                <Navbar></Navbar>,
            </header>
            <section className='bg-[#232d35]'>
                <Slide></Slide>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
            <section>
                <Categories></Categories>
            </section>
            <section>
                <Service></Service>
            </section>
            <section>
                <Testimonial></Testimonial>
            </section>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;