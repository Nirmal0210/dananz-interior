import React from 'react'
import ChooseUs from '../../Common/ChooseUs'

const Portofolio = () => {
    return (
        <>
            <section id='portfoliomain' className='container'>
                <p className='lg-txt black fw-bold text-center'>Portofolio</p>
                <div className='about-desc'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                <img src={require('../../Assets/Images/about_main.png')} className="aboutus-main-img" alt="newImg" />
            </section>
            <section id='portofolioabout' className='container'>
                <div className='d-flex align-items-center'>
                    <div className='sm-txt'>ABOUT</div>
                    <hr style={{ border: "1px solid black", opacity: "1", width: "40%" }} className="ms-2" />
                </div>

                <div className="d-flex my-4">
                    <div className="port-about-image">
                        <img src={require('../../Assets/Images/Home_About.png')} className="port-image" alt='newImg' />
                    </div>
                    <div className="port-about-box">
                        <div className='user-box'>
                            <div className='user-div'>
                                <img src={require('../../Assets/Images/user-icon.png')} className="port-user-img" alt='newImg' />
                                <div className='ms-2'>
                                    <p className='sm-txt fw-bold black mb-0'>Arga Danaan</p>
                                    <p className='sm-txt l-gray mb-0'>CEO of Dananz</p>
                                </div>
                            </div>
                            <div className='user-desc'>
                                <p className='sm-txt2 fw-bold black'>Minimalist Room</p>
                                <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>
                                <div className='mt-3'>
                                    <button className='user-btn'>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row-reverse my-4">
                    <div className="port-about-image">
                        <img src={require('../../Assets/Images/Home_About.png')} className="port-image" alt='newImg' />
                    </div>
                    <div className="port-about-box">
                        <div className='user-box'>
                            <div className='user-div1'>
                                <img src={require('../../Assets/Images/user-icon.png')} className="port-user-img" alt='newImg' />
                                <div className='ms-2'>
                                    <p className='sm-txt fw-bold black mb-0'>Arga Danaan</p>
                                    <p className='sm-txt l-gray mb-0'>CEO of Dananz</p>
                                </div>
                            </div>
                            <div className='user-desc1'>
                                <p className='sm-txt2 fw-bold black'>Vintage Room</p>
                                <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>
                                <div className='mt-3'>
                                    <button className='user-btn'>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex my-4">
                    <div className="port-about-image">
                        <img src={require('../../Assets/Images/Home_About.png')} className="port-image" alt='newImg' />
                    </div>
                    <div className="port-about-box">
                        <div className='user-box'>
                            <div className='user-div'>
                                <img src={require('../../Assets/Images/user-icon.png')} className="port-user-img" alt='newImg' />
                                <div className='ms-2'>
                                    <p className='sm-txt fw-bold black mb-0'>Arga Danaan</p>
                                    <p className='sm-txt l-gray mb-0'>CEO of Dananz</p>
                                </div>
                            </div>
                            <div className='user-desc'>
                                <p className='sm-txt2 fw-bold black'>Minimalist Room</p>
                                <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>
                                <div className='mt-3'>
                                    <button className='user-btn'>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-row-reverse my-4">
                    <div className="port-about-image">
                        <img src={require('../../Assets/Images/Home_About.png')} className="port-image" alt='newImg' />
                    </div>
                    <div className="port-about-box">
                        <div className='user-box'>
                            <div className='user-div1'>
                                <img src={require('../../Assets/Images/user-icon.png')} className="port-user-img" alt='newImg' />
                                <div className='ms-2'>
                                    <p className='sm-txt fw-bold black mb-0'>Arga Danaan</p>
                                    <p className='sm-txt l-gray mb-0'>CEO of Dananz</p>
                                </div>
                            </div>
                            <div className='user-desc1'>
                                <p className='sm-txt2 fw-bold black'>Vintage Room</p>
                                <p>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>
                                <div className='mt-3'>
                                    <button className='user-btn'>Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ChooseUs />
        </>
    )
}

export default Portofolio