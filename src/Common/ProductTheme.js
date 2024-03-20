import React from 'react'

const ProductTheme = () => {
    return (
        <section id='product' className='container'>
            <div className='d-flex align-items-center'>
                <div className='sm-txt'>PRODUCT</div>
                <hr style={{ border: "1px solid black", opacity: "1", width: "40%" }} className="ms-2" />
            </div>
            <div className="row g-0 product-data">
                <div className="col-6"><p className='product-title'>Choose your product themes.</p></div>
                <div className="col-6"><p className='product-desc'>Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.</p></div>
            </div>
            <ul className='mt-5'>
                <li>
                    <div className='row g-0'>
                        <div className='col-1 col-sm-1 col-xl-1 col-md-1 fw-bold md-txt'>01</div>
                        <div className='col-7 col-md-6 col-xl-6 col-sm-7'>
                            <div className='fw-bold md-txt'>
                                Vintage
                            </div>
                            <div className='d-gray my-3 sm-txt2'>
                                the use of simple and limited elements to get the best effect or impression.
                            </div>
                        </div>
                        <div className='col-4 col-xl-5 col-md-5 col-sm-4 fw-bold text-end md-txt'><i className='bi bi-arrow-right'></i></div>
                    </div>
                </li>
                <li>
                    <div className='row g-0'>
                        <div className='col-1 col-sm-1 col-xl-1 col-md-1 fw-bold md-txt'>01</div>
                        <div className='col-7 col-md-6 col-xl-6 col-sm-7'>
                            <div className='fw-bold md-txt'>
                                Vintage
                            </div>
                            <div className='d-gray my-3 sm-txt2'>
                                the use of simple and limited elements to get the best effect or impression.
                            </div>
                        </div>
                        <div className='col-4 col-xl-5 col-md-5 col-sm-4 fw-bold text-end md-txt'><i className='bi bi-arrow-right'></i></div>
                    </div>
                </li>
                <li>
                    <div className='row g-0'>
                        <div className='col-1 col-sm-1 col-xl-1 col-md-1 fw-bold md-txt'>01</div>
                        <div className='col-7 col-md-6 col-xl-6 col-sm-7'>
                            <div className='fw-bold md-txt'>
                                Vintage
                            </div>
                            <div className='d-gray my-3 sm-txt2'>
                                the use of simple and limited elements to get the best effect or impression.
                            </div>
                        </div>
                        <div className='col-4 col-xl-5 col-md-5 col-sm-4 fw-bold text-end md-txt'><i className='bi bi-arrow-right'></i></div>
                    </div>
                </li>
                <li>
                    <div className='row g-0'>
                        <div className='col-1 col-sm-1 col-xl-1 col-md-1 fw-bold md-txt'>01</div>
                        <div className='col-7 col-md-6 col-xl-6 col-sm-7'>
                            <div className='fw-bold md-txt'>
                                Vintage
                            </div>
                            <div className='d-gray my-3 sm-txt2'>
                                the use of simple and limited elements to get the best effect or impression.
                            </div>
                        </div>
                        <div className='col-4 col-xl-5 col-md-5 col-sm-4 fw-bold text-end md-txt'><i className='bi bi-arrow-right'></i></div>
                    </div>
                </li>

            </ul>
        </section>
    )
}

export default ProductTheme