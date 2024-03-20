import React from 'react'
import CountUp from 'react-countup';

const HomeMain = () => {
    return (
        <section className='container' id='home'>
            <div className="d-flex">
                <div className='xl-txt fw-bold'>
                    Design your interor with high quality.
                </div>
                <hr className='line' />
            </div>
            <div className='total-div' data-aos="fade-zoom-in" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="300">
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
            <div className='mt-5'>
                <img src={require('../../Assets/Images/Home_One.png')} className="home-image1" />
            </div>
        </section>

    )
}

export default HomeMain