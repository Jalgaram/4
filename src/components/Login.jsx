import React, { useRef } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Button, Form } from 'react-bootstrap'

const Login = () => {
    const id = useRef();
    const password = useRef();

    function chkLogin(){
        var idv = id.current.value;
        var pw = password.current.value;

        var num = pw.search(/[0-9]/g);
        var eng = pw.search(/[a-z]/ig);
        var spe = pw.search(/[`~!@#$%^&*|:;/?]/gi);
        var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*(\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?))$/;
        var phone = /^01[016789][0-9]{7,8}$/;

        if(!email.test(idv) && !phone.test(idv)){
            alert('이메일 또는 전화번호 형식이 아닙니다.');
            return false;
        }else if(pw.length < 8 || pw.length > 20){
            alert('8자리 ~ 20자리 이내로 입력해주세요.');
        }
    }

    return (
        <>
            <Header />
            <hr style={{ margin: 0 }} />

            <div className="loginWrap">
                <div className="login-title">
                    <h2>더욱 빠르게 결제하시려면 로그인하세요.</h2>
                </div>

                <div className="login-content">
                    <h4>Apple Store에 로그인하세요</h4>

                    <Form>
                        <Form.Group className="email-box" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="이메일 또는 전화번호" />
                        </Form.Group>

                        <Form.Group className="passwrod-box" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="암호" />
                        </Form.Group>

                        <label className="login-checkbox">
                            <input type="checkbox" />
                            <span> 계정 저장</span>
                        </label>

                        <h4>암호를 잊으셨습니까? <i className="fi fi-bs-arrow-up-right"></i></h4>
                        <p>Apple 계정이 없습니까? <span>Apple 계정 생성 <i className="fi fi-bs-arrow-up-right"></i></span></p>

                        <Button variant="primary" type="submit">
                            로그인
                        </Button>
                    </Form>
                </div>

            </div>

            <hr style={{ margin: 0 }} />

            <div className="login-footerWrap">
                <div className="login-footerfont1">
                    <p>도움이 더 필요하신가요? <span>지금 채팅하기</span> 또는 080-330-8877 번으로 문의하세요.</p>
                </div>
            </div>

            <div className="login-footerfontWrap">
                <div className="login-footerfont2">
                    <p>Apple 온라인 스토어는 업체 표준 암호화를 사용하여 제출된 고객 비밀 정보를 보호합니다. <span>보안 정책</span>에 대해 더 알아보기.</p>

                    <hr />

                    <p>다양한 쇼핑방법: <span>Apple Store를 방문</span>하거나, <span>리셀러</span>를 찾아보거나, 080-330-8877 번으로 전화하세요.</p>

                    <div>
                        <span>Copyright © 2025 Apple Inc. 모든 권리 보유.</span>

                        <ul>
                            <li>개인정보 처리방침</li>
                            <li>약관</li>
                            <li>판매 및 환불</li>
                            <li>법적 고지</li>
                            <li>사이트 맵</li>
                        </ul>

                        <span>대한민국</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login