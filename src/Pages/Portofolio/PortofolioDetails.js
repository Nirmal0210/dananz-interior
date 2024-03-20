import React from 'react'

const PortofolioDetails = () => {
    return (
        <>
            <section id='portfoliomain' className='container'>
                <p className='lg-txt black fw-bold text-center'>Minimalist Room</p>
                <div className='about-desc'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
                <img src={require('../../Assets/Images/about_main.png')} className="aboutus-main-img" alt="newImg" />
            </section>
            <section id='port-details-ow' className='container'>
                <div className="row g-0 ">
                    <div className="col-6 pe-5">
                        <p className='sm-txt2 black fw-bold'>
                            Project Overview
                        </p>
                        <p className='sm-txt d-gray'>
                            Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                        </p>
                        <div className='d-flex mt-5'>
                            <p className='sm-txt d-gray'>July 22 - 2022</p>
                            <p className='sm-txt d-gray ms-5'>Interior Design - Furniture</p>
                        </div>
                    </div>
                    <div className="col-6 pe-5">
                        <p className='sm-txt2 black fw-bold'>
                            Project Overview
                        </p>
                        <p className='sm-txt d-gray'>
                            Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                        </p>
                        <p className='sm-txt d-gray'>
                            Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere. Online learning with us does not interfere with your daily life. because learning can be done anytime and anywhere.
                        </p>
                    </div>
                </div>
                <div className='row g-0 justify-content-between my-2'>
                    <div className='col-6 port-desc-img1'>
                        <img src={require('../../Assets/Images/port-desc-img1.png')} alt='newImg' />
                    </div>
                    <div className='col-6 port-desc-img1'>
                        <img src={require('../../Assets/Images/port-desc-img2.png')} alt='newImg' />
                    </div>
                </div>
                <div className='row g-0 my-4'>
                    <div className='col-12 port-desc-img2'>
                        <img src={require('../../Assets/Images/port-desc-img3.png')} alt='newImg' />
                    </div>
                </div>
                <div className='row g-0 justify-content-between my-2'>
                    <div className='col-6 port-desc-img1'>
                        <img src={require('../../Assets/Images/port-desc-img4.png')} alt='newImg' />
                    </div>
                    <div className='col-6 port-desc-img1'>
                        <img src={require('../../Assets/Images/port-desc-img5.png')} alt='newImg' />
                    </div>

                </div>
            </section>
        </>
    )
}

export default PortofolioDetails