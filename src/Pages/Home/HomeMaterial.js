import React from 'react'

const HomeMaterial = () => {
    return (
        <section id='material' className='container'>
            <div className='d-flex align-items-center'>
                <div className='sm-txt'>MATERIAL</div>
                <hr style={{ border: "1px solid black", opacity: "1", width: "40%" }} className="ms-2" />
            </div>
            <div className="row g-1">
                <div className="col-5 col-xs-4 col-sm-4 material-data">
                    <div className='material-title'>
                        choice of materials for quality furniture.
                    </div>
                    <div className='material-desc pe-2'>
                        You can custom the material as desired. And our furniture uses the best materials and selected quality materials.
                    </div>
                    <div className='material-btn'>
                        See Materials
                    </div>
                </div>
                <div className="col-4 col-sm-4 col-xs-4">
                    <img src={require("../../Assets/Images/material1.png")} alt="newImg1" className="material-image1 mt-4" />
                </div>
                <div className="col-3 col-sm-4 col-xs-4" style={{ marginTop: "-5rem" }}>
                    <img data-aos="flip-right" data-aos-delay="400" data-aos-anchor=".example-selector" src={require("../../Assets/Images/materail3.png")} alt="newImg1" className="material-image2 mt-4" />
                    <img data-aos="flip-left" data-aos-delay="400" data-aos-anchor=".example-selector" src={require("../../Assets/Images/material2.png")} alt="newImg1" className="material-image3 mt-4" />
                </div>
            </div>
        </section>
    )
}

export default HomeMaterial