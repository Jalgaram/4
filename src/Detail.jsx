import React from 'react'
import "./scss/detail.scss";
import Header from './components/Header'
import Footer from './components/Footer'
import DetailContent from './components/DetailContent';
import DetailTab from './components/DetailTab';

const Detail = () => {
  return (
    <>
      <Header />
      <DetailContent />
      <DetailTab />
      <Footer />
    </>
  )
}

export default Detail