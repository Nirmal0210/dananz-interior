import React from 'react'

const HomeService = () => {
    return (
        <section id='service' className='container'>
            <div className='d-flex align-items-center'>
                <div className='sm-txt'>SERVICE</div>
                <hr style={{border: "1px solid black", opacity: "1", width: "40%" }} className="ms-2" />
            </div>
            <div className='md-txt d-gray mt-3 mb-4'>
                attractive furniture with the best quality.
            </div>
            <div className='hservice-div'>
                <p className='hservice-desc'>Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.</p>
                <ul className='hservice-list'>
                    <li className='row g-0'><div className='col-1 sm-txt2'>01</div><div className='col-8 text-start sm-txt2'>Interior Design</div><div className='col-2 text-end sm-txt2'><i className='bi bi-arrow-right'></i></div></li>
                    <li className='row g-0'><div className='col-1 sm-txt2'>01</div><div className='col-8 text-start sm-txt2'>Interior Design</div><div className='col-2 text-end sm-txt2'><i className='bi bi-arrow-right'></i></div></li>
                    <li className='row g-0'><div className='col-1 sm-txt2'>01</div><div className='col-8 text-start sm-txt2'>Interior Design</div><div className='col-2 text-end sm-txt2'><i className='bi bi-arrow-right'></i></div></li>
                </ul>
            </div>
            <div className='hservice-img'>
                <img src={require("../../Assets/Images/Home_Service.png")} alt="newImg1"/>
            </div>
        </section>
    )
}

export default HomeService