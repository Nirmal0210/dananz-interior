import React from 'react'

const ChooseUs = () => {
    return (
        <section id='chooseusservices' className='container'>
            <div className='d-flex align-items-center mb-3'>
                <div className='sm-txt'>SERVICE</div>
                <hr style={{ border: "1px solid black", opacity: "1", width: "40%" }} className="ms-2" />
            </div>
            <p className='about-service-title'>
                Why Choose Us
            </p>
            <p className='about-service-desc'>
                Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.
            </p>
            <div className="row g-2 my-4">
                <div className="col-4">
                    <div className='about-box'>
                        <img src={require("../Assets/Images/Home_About.png")} alt="newImg"/>
                        <p className='sm-txt2 black fw-bold mt-3'>High Quality</p>
                        <p className='sm-txt l-gray'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className='about-box'>
                        <img src={require("../Assets/Images/Home_About.png")} alt="newImg"/>
                        <p className='sm-txt2 black fw-bold mt-3'>High Quality</p>
                        <p className='sm-txt l-gray'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                    </div>
                </div>
                <div className="col-4">
                    <div className='about-box'>
                        <img src={require("../Assets/Images/Home_About.png")} alt="newImg"/>
                        <p className='sm-txt2 black fw-bold mt-3'>High Quality</p>
                        <p className='sm-txt l-gray'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUs