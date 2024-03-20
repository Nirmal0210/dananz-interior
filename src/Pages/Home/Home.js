import React from 'react'
import ProductTheme from '../../Common/ProductTheme'
import HomeAbout from './HomeAbout'
import HomeMain from './HomeMain'
import HomeMaterial from './HomeMaterial'
import HomeService from './HomeService'

const Home = () => {
    return (
        <div className='py-5'>
            <HomeMain />
            <HomeAbout />
            <HomeService />
            <ProductTheme />
            <HomeMaterial />
        </div >
    )
}

export default Home