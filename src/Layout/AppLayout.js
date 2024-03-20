import React from 'react'
import Footer from './Footer'
import Header from './Header'
import RouterLayout from './RouterLayout'
import Sidebar from './Sidebar'

const AppLayout = () => {
    return (
        <>
            <div id="App">
                <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                <div id="page-wrap">
                    <Header />
                    <RouterLayout />
                    <Footer /></div>
            </div>
        </>
    )
}

export default AppLayout