import React from 'react'
import Header from './components/Header'
import Slide from './components/Slide'
import InnerMenu from './components/InnerMenu'
import New from './components/New'
import CenterSlide from './components/CenterSlide'
import Content from './components/Content'
import Sale from './components/Sale'
import Footer from './components/Footer'

const Main = () => {
    return (
        <div>
            <Header />
            <Slide />
            <InnerMenu />
            <New />
            <CenterSlide />
            <Content />
            <Sale />
            <Footer />
        </div>
    )
}

export default Main