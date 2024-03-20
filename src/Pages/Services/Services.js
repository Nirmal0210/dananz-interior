import React from 'react'
import ProductTheme from '../../Common/ProductTheme'

const Services = () => {
    return (
        <>
            <section id='servicemain' className='container'>
                <p className='lg-txt black fw-bold text-center'>Services</p>
                <div className='about-desc'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                <img src={require('../../Assets/Images/about_main.png')} className="aboutus-main-img" alt="newImg" />
            </section>

            <section id='serviceachievement' className='container'>
                <div className='d-flex align-items-center mb-3'>
                    <div className='sm-txt'>ACHIEVEMENT</div>
                    <hr style={{ border: "1px solid black", opacity: "1", width: "40%" }} className="ms-2" />
                </div>
                <div className='d-flex my-4'>
                    <div className='service-achieve-image'>
                        <img src={require("../../Assets/Images/Home_Service.png")} alt="newImg" data-aos="fade-in" data-aos-duration="300" />
                    </div>
                    <div className='service-achieve-box'>
                        <p className='sm-txt2 black fw-bold'>Interior design</p>
                        <p className='sm-txt l-gray'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                    </div>
                </div>
                <div className='d-flex my-4'>
                    <div className='service-achieve-image'>
                        <img src={require("../../Assets/Images/Home_Service.png")} alt="newImg" data-aos="fade-in" data-aos-duration="300" />
                    </div>
                    <div className='service-achieve-box'>
                        <p className='sm-txt2 black fw-bold'>Interior design</p>
                        <p className='sm-txt l-gray'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                    </div>
                </div>
                <div className='d-flex my-4'>
                    <div className='service-achieve-image'>
                        <img src={require("../../Assets/Images/Home_Service.png")} alt="newImg" data-aos="fade-in" data-aos-duration="300" />
                    </div>
                    <div className='service-achieve-box'>
                        <p className='sm-txt2 black fw-bold'>Interior design</p>
                        <p className='sm-txt l-gray'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                    </div>
                </div>
            </section>
            <ProductTheme />
        </>
    )
}

export default Services