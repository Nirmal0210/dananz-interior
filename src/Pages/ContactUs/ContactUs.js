import React from 'react'

const ContactUs = () => {
    return (
        <>
            <section id='contactusmain' className='container'>
                <p className='lg-txt black fw-bold text-center'>Contact Us</p>
                <div className='about-desc'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</div>
            </section>

            <section id='contactusform' className='container'>
                <form className="row g-3 mb-2">
                    <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress2" className="form-label">Phone Number</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col-12">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" placeholder='Message' />
                    </div>
                    <div className="col-12 navbar-nav my-5">
                        <div className="nav-item justify-content-center">
                            <button type="button" className="nav-btn" onClick={() => ("/contactus")}>Send Massage</button>
                        </div>
                    </div>
                </form>
            </section>
            <section id='contactuslocation' className='container'>
                <div className='d-flex align-items-center'>
                    <div className='sm-txt'>Location</div>
                    <hr style={{ border: "1px solid black", opacity: "1", width: "40%" }} className="ms-2" />
                </div>
                <div className='row my-3'>
                    <div className='col-4'>
                        <p className='md-txt d-gray fw-bold'>Visit Our Stores</p>
                        <p className='sm-txt l-gray'>Find us at these locations.</p>
                        <p className='sm-txt2 d-gray fw-bold mb-1'>Email</p>
                        <p className='sm-txt l-gray mb-1'>dananz@gmail.com</p>
                        <p className='sm-txt2 d-gray fw-bold mb-1'>Phone</p>
                        <p className='sm-txt l-gray mb-1'>+62 815 002 1000</p>
                    </div>
                    <div className='col-8'>
                        <div className='row'>
                            <div className='col-6'>
                                <p className='sm-txt2 fw-bold d-gray'>Jakarta</p>
                                <p className='sm-txt l-gray'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                            </div>
                            <div className='col-6'>
                                <p className='sm-txt2 fw-bold d-gray'>Surakarta</p>
                                <p className='sm-txt l-gray'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                            </div>
                            <div className='col-6'>
                                <p className='sm-txt2 fw-bold d-gray'>Yogyakarta</p>
                                <p className='sm-txt l-gray'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                            </div>
                            <div className='col-6'>
                                <p className='sm-txt2 fw-bold d-gray'>Bandung</p>
                                <p className='sm-txt l-gray'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ContactUs