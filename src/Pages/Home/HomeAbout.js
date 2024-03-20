import React from 'react'

const HomeAbout = () => {
    return (
        <section id='about' className='container'>
            <div className='d-flex align-items-center'>
                <div className='sm-txt'>ABOUT</div>
                <hr style={{ border: "1px solid black", opacity: "1", width: "40%" }} className="ms-2" />
            </div>
            <div className='md-txt d-gray mt-3 mb-4'>
                “We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”
            </div>
            <div className="row">
                <div className="col-9">
                    <img src={require('../../Assets/Images/Home_About.png')} className="home-image2" alt="newImg1" />
                </div>
                <div className="col-3">
                    <div className='user-box'>
                        <div className='user-div'>
                            <img src={require('../../Assets/Images/user-icon.png')} className="user-img" alt="newImg1" />
                            <div className='ms-2'>
                                <p className='sm-txt fw-bold black mb-0'>Arga Danaan</p>
                                <p className='sm-txt l-gray mb-0'>CEO of Dananz</p>
                            </div>
                        </div>
                        <div className='user-desc'>
                            <p className='sm-txt l-gray'>Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.</p>
                            <div  data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                                <button className='user-btn'>Learn More</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeAbout