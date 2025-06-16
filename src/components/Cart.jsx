import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCount, minusCount, removeItem, sortName } from './store'
import {useNavigate } from 'react-router-dom'

const Cart = () => {
    let cart = useSelector(state => state.cart);
    let totalPrice = cart.reduce((acc, cur) => acc + cur.price * cur.amount, 0);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    return (
        <>
            <Header />

            <hr style={{ margin: 0 }} />

            <div className="cartfont1">
                <h2>장바구니 총액: ₩{totalPrice.toLocaleString()}</h2>
                <p>전 상품 무료 배송.</p>
                <Button  variant="primary" className='cartBtn1'>결제</Button>
            </div>

            <Table striped bordered hover className='cartTable'>
                <thead>
                    <tr>
                        <th>상품 이미지</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((v, i) =>
                            <tr key={i}>
                                <td>
                                    <img src={v.img} alt="상품이미지" 
                                    style={{cursor:"pointer"}}
                                    onClick={() => {navigate(`/detail/${v.id}`)}}
                                /></td>

                                <td className='cartTitle' 
                                style={{cursor:"pointer"}} 
                                onClick={() => {navigate(`/detail/${v.id}`)}}>{v.mainTitle}</td>

                                <td className='cartCount'>
                                    <button onClick={() => {
                                        if(cart[i].amount <= 1){
                                            alert('최소 주문 수량은 1개입니다.')
                                        } else {
                                            dispatch(minusCount(i));
                                        }
                                    }}>
                                        <i className="fi fi-sr-minus-small"></i>
                                    </button>
                                    
                                    <span> {v.amount} </span>
                                    
                                    <button onClick={() => dispatch(addCount(i))}>
                                        <i className="fi fi-sr-plus-small"></i>
                                    </button>

                                    <p className='cartDelt' onClick={() => dispatch(removeItem(i))}>
                                        삭제
                                    </p>
                                </td>
                                
                                <td style={{cursor:"default"}}>₩{(v.price * v.amount).toLocaleString()}</td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <div className="cartBtns">
                <Button variant="outline-primary" className='cartBtn2' onClick={() => dispatch(sortName())}>이름순정렬</Button>
            </div>

            <Footer />
        </>
    )
}

export default Cart