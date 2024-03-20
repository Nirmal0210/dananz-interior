import React from 'react'
import ChooseUs from '../../Common/ChooseUs'
import CountUp from 'react-countup'
const AboutUs = () => {
    return (
        <>
            <section id='aboutusmain' className='container'>
                <p className='lg-txt black fw-bold text-center'>About</p>
                <div className='about-desc'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                <img src={require('../../Assets/Images/about_main.png')} className="aboutus-main-img" alt="newImg" />
            </section>
            <section id='aboutusachievement' className='container'>
                <div className='d-flex align-items-center'>
                    <div className='sm-txt'>ACHIEVEMENT</div>
                    <hr style={{ border: "1px solid black", opacity: "1", width: "40%" }} className="ms-2" />
                </div>
                <p className='achievement-desc'>
                    interior customization with Danaanz, best quality with professional workers
                </p>
                <div className='row gx-2 mt-5'>
                    <div className="col-9">
                        <img src={require('../../Assets/Images/about_achievement.png')} className="aboutus-achievement-img" alt="newImg" />
                    </div>
                    <div className="col-3">
                        <div className='total-div-about' data-aos="fade-zoom-in" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="300">
                            <div className='mb-5'>
                                <div className='lg-txt'><CountUp start={0} end={350} />+</div>
                                <div className='sm-txt'>Project Completed</div>
                            </div>
                            <div className='mb-5'>
                                <div className='lg-txt'><CountUp start={0} end={23} />+</div>
                                <div className='sm-txt'>Professional Teams</div>
                            </div>
                            <div className='mb-2'>
                                <div className='lg-txt'><CountUp start={0} end={15} />+</div>
                                <div className='sm-txt'>Years Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ChooseUs />
        </>
    )
}

export default AboutUs