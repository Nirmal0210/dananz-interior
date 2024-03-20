import React from 'react'
import ChooseUs from '../../Common/ChooseUs'

const OurTeams = () => {
    return (
        <>
            <section id='ourteamsmain' className='container'>
                <p className='lg-txt black fw-bold text-center'>Our Teams</p>
                <div className='about-desc'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                <img src={require('../../Assets/Images/about_main.png')} className="aboutus-main-img" alt="newImg1" />
            </section>
            <section id='ourteamsdesigner' className='container'>
                <div className='d-flex align-items-center mb-3'>
                    <div className='sm-txt'>Designer</div>
                    <hr style={{ border: "1px solid black", opacity: "1", width: "40%" }} className="ms-2" />
                </div>
                <p className='about-service-title'>
                    Creative Person
                </p>
                <p className='about-service-desc'>
                    Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
                </p>
                <div className='row gy-5'>
                    <div className='col-4 col-sm-3 col-md-3 col-lg-3'>
                        <div className='team-box' data-aos="zoom-in" data-aos-duration="300">
                            <img src={require('../../Assets/Images/shooper.png')} alt="newImg1" />
                            <div className='bottom-center'>
                                <p className='mb-0 sm-txt2 black text-start fw-bold'>Shoo Phar Dhie</p>
                                <p className='mb-0 sm-txt l-gray text-start'>fsadfs</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 col-sm-3 col-md-3 col-lg-3'>
                        <div className='team-box' data-aos="zoom-in" data-aos-duration="300">
                            <img src={require('../../Assets/Images/shooper.png')} alt="newImg1" />
                            <div className='bottom-center'>
                                <p className='mb-0 sm-txt2 black text-start fw-bold'>Shoo Phar Dhie</p>
                                <p className='mb-0 sm-txt l-gray text-start'>fsadfs</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 col-sm-3 col-md-3 col-lg-3'>
                        <div className='team-box' data-aos="zoom-in" data-aos-duration="300">
                            <img src={require('../../Assets/Images/shooper.png')} alt="newImg1" />
                            <div className='bottom-center'>
                                <p className='mb-0 sm-txt2 black text-start fw-bold'>Shoo Phar Dhie</p>
                                <p className='mb-0 sm-txt l-gray text-start'>fsadfs</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 col-sm-3 col-md-3 col-lg-3'>
                        <div className='team-box' data-aos="zoom-in" data-aos-duration="300">
                            <img src={require('../../Assets/Images/shooper.png')} alt="newImg1" />
                            <div className='bottom-center'>
                                <p className='mb-0 sm-txt2 black text-start fw-bold'>Shoo Phar Dhie</p>
                                <p className='mb-0 sm-txt l-gray text-start'>fsadfs</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 col-sm-3 col-md-3 col-lg-3'>
                        <div className='team-box' data-aos="zoom-in" data-aos-duration="300">
                            <img src={require('../../Assets/Images/shooper.png')} alt="newImg1" />
                            <div className='bottom-center'>
                                <p className='mb-0 sm-txt2 black text-start fw-bold'>Shoo Phar Dhie</p>
                                <p className='mb-0 sm-txt l-gray text-start'>fsadfs</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 col-sm-3 col-md-3 col-lg-3'>
                        <div className='team-box' data-aos="zoom-in" data-aos-duration="300">
                            <img src={require('../../Assets/Images/shooper.png')} alt="newImg1" />
                            <div className='bottom-center'>
                                <p className='mb-0 sm-txt2 black text-start fw-bold'>Shoo Phar Dhie</p>
                                <p className='mb-0 sm-txt l-gray text-start'>fsadfs</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 col-sm-3 col-md-3 col-lg-3'>
                        <div className='team-box' data-aos="zoom-in" data-aos-duration="300">
                            <img src={require('../../Assets/Images/shooper.png')} alt="newImg1" />
                            <div className='bottom-center'>
                                <p className='mb-0 sm-txt2 black text-start fw-bold'>Shoo Phar Dhie</p>
                                <p className='mb-0 sm-txt l-gray text-start'>fsadfs</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4 col-sm-3 col-md-3 col-lg-3'>
                        <div className='team-box' data-aos="zoom-in" data-aos-duration="300">
                            <img src={require('../../Assets/Images/shooper.png')} alt="newImg1" />
                            <div className='bottom-center'>
                                <p className='mb-0 sm-txt2 black text-start fw-bold'>Shoo Phar Dhie</p>
                                <p className='mb-0 sm-txt l-gray text-start'>fsadfs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ChooseUs />
        </>
    )
}

export default OurTeams