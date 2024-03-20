import React from 'react'

const Footer = () => {
    return (
        <section className="contactus">
            <div className="row g-0 footer-box" >
                <div className="col-6 md-txt p-4 white fw-bold">let's discuss making your interior like a dream place!</div>
                <div className="col-6 p-4">
                    <p className='sm-txt white footer-desc' >Contact us below to work together to build your amazing interior
                    </p>
                    <button className='hcontactus-btn'>
                        Contact Us
                    </button>
                </div>
            </div>
            <div className='container my-4'>
                <div className="row g-0">
                    <div className="col-6">
                        <p className='md-txt black fw-bold'>Dananz</p>
                        <p className='md-txt d-gray fw-bold'>One of the best furniture agency.</p>
                    </div>
                    <div className="col-6">
                        <div className="footer-right-box">
                            <div className='d-flex align-items-center'>
                                <div className='black-dot'></div>
                                <p className='sm-txt black mb-0'>Enter  your email to get the laterst news</p>
                            </div>
                            <div className='footer-input-box'>
                                <input type={"email"} placeholder="Email Address" className='home-input' />
                                <i className='bi bi-arrow-right'></i>
                            </div>
                            <div className="footer-icon-box">
                                <p className="sm-txt mb-1 d-gray">
                                    Follow us On
                                </p>
                                <ul className="d-flex">
                                    <li className="icon-bg">
                                        <i className="bi bi-facebook"></i>
                                    </li>
                                    <li className="icon-bg ms-2">
                                        <i className="bi bi-instagram"></i>
                                    </li>
                                    <li className="icon-bg ms-2">
                                        <i className="bi bi-tiktok"></i>
                                    </li>
                                    <li className="icon-bg ms-2">
                                        <i className="bi bi-youtube"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer