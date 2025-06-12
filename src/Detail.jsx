import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import DetailContent from './components/DetailContent';
import DetailTab from './components/DetailTab';
import { useParams } from 'react-router-dom';
import data from './components/data';
import data2 from './components/data2';
import data3 from './components/data3';

const allContents = [...data, ...data2, ...data3];

const Detail = (props) => {
  let { id } = useParams();
  const product = allContents.find(item => item.id === Number(id));

  return (
    <>
      <Header />
      {product ? (
        <>
          <DetailContent product={product} />
          <DetailTab product={product} />
        </>
      ) : (
        <p>해당 상품을 찾을 수 없습니다.</p>
      )}
      
      <Footer />
    </>
  )
}

export default Detail