
import { useEffect , useRef } from "react";
import { KAKAO_REST_API_KEY , REDIRECT_URI , NAVER_CLIENT_KEY , APPLE_CLIENT_ID } from "../../data/keyData";

import { useGoogleLogin } from '@react-oauth/google';

import AppleLogin from 'react-apple-login'

const Login = () => {
    // 카카오 로그인
    const KAKAO_AUTO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

    const handleKakaoLogin = () => {
        window.location.href = KAKAO_AUTO_URL;
    }

    // 네이버 로그인
    // public > index.html script import
    const naverRef = useRef()
    const { naver } = window;
    const initializeNaverLogin  = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: NAVER_CLIENT_KEY,
            callbackUrl : REDIRECT_URI,
            isPopup: false,
            callbackHandle: true,
            loginButton: { color: "green", type: 1, height: 47 }
        });

        naverLogin.init();
    }

    const handleNaverLogin = () => {
		naverRef.current.children[0].click()
	}

    useEffect(() => {
        initializeNaverLogin();  //네이버 로그인
    } , [])

    //구글 로그인
    const handleGoogleLogin = useGoogleLogin ({
        onSuccess: (codeResponse) => {
            console.log(codeResponse);
            navigator('http://localhost:3000/result')
        },
        flow: 'auth-code',
    })
    
    return (
        <div>
            <div className="kakao-box" onClick={() => handleKakaoLogin()}>
                <svg width="100%" height="100%" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M20.0028 12.62C14.479 12.62 10 16.0987 10 20.3833C10 23.0507 11.7338 25.4013 14.3679 26.8017L13.2565 30.8751C13.1564 31.2363 13.5677 31.5252 13.8844 31.3141L18.7469 28.0854C19.1581 28.1243 19.5749 28.1465 19.9972 28.1465C25.521 28.1465 30 24.6678 30 20.3833C30.0056 16.0987 25.5265 12.62 20.0028 12.62Z" fill="black"></path>
                </svg>
                <span>카카오톡으로 시작하기</span>
            </div>

            <div id="naverIdLogin" ref={ naverRef }></div>

            <div className="naver-box" onClick={() => handleNaverLogin()}>
                <svg width="100%" height="100%" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.1728 12.8398V22.0859L16.8482 12.8398H10V31.1645H16.8168V21.9184L23.1518 31.1645H30V12.8398H23.1728Z" fill="white"></path>
                </svg>
                <span>네이버로 시작하기</span>
            </div>

            <div className="google-box" onClick={() => handleGoogleLogin()}>
                <svg width="100%" height="100%" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M29.6 22.2273C29.6 21.5182 29.5364 20.8364 29.4182 20.1819H20V24.0501H25.3818C25.15 25.3001 24.4455 26.3592 23.3864 27.0682V29.5773H26.6182C28.5091 27.8364 29.6 25.2728 29.6 22.2273Z" fill="#4285F4"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9998 32C22.6998 32 24.9635 31.1046 26.618 29.5773L23.3862 27.0682C22.4907 27.6682 21.3453 28.0228 19.9998 28.0228C17.3953 28.0228 15.1907 26.2637 14.4044 23.9H11.0635V26.4909C12.7089 29.7591 16.0907 32 19.9998 32Z" fill="#34A853"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.4045 23.9001C14.2045 23.3001 14.0909 22.6592 14.0909 22.0001C14.0909 21.341 14.2045 20.7001 14.4045 20.1001V17.5092H11.0636C10.3864 18.8592 10 20.3864 10 22.0001C10 23.6137 10.3864 25.141 11.0636 26.491L14.4045 23.9001Z" fill="#FBBC05"></path>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.9998 15.9773C21.468 15.9773 22.7862 16.4818 23.8226 17.4727L26.6907 14.6045C24.9589 12.9909 22.6953 12 19.9998 12C16.0907 12 12.7089 14.2409 11.0635 17.5091L14.4044 20.1C15.1907 17.7364 17.3953 15.9773 19.9998 15.9773Z" fill="#EA4335"></path>
                </svg>
                <span>구글로 시작하기</span>
            </div>  

            <AppleLogin
                clientId={`${APPLE_CLIENT_ID}`} 
                redirectURI={`${REDIRECT_URI}`}   
                responseType={"code"} 
                responseMode={"query"}  
                usePopup={false} 
                render={(renderProps) => {
                    <div className="apple-box" onClick={renderProps.onClick}>
                        <svg width="100%" height="100%" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.3242 13.1386C21.4075 13.1386 22.7654 12.4062 23.574 11.4297C24.3064 10.5448 24.8404 9.30893 24.8404 8.07308C24.8404 7.90525 24.8252 7.73741 24.7946 7.6001C23.5893 7.64587 22.1398 8.40874 21.2702 9.43099C20.5836 10.2091 19.958 11.4297 19.958 12.6808C19.958 12.8639 19.9885 13.047 20.0038 13.108C20.0801 13.1233 20.2021 13.1386 20.3242 13.1386ZM16.5098 31.6001C17.9898 31.6001 18.6459 30.6084 20.492 30.6084C22.3687 30.6084 22.7807 31.5696 24.4285 31.5696C26.0458 31.5696 27.129 30.0744 28.1513 28.6096C29.2956 26.9313 29.7686 25.2835 29.7991 25.2072C29.6923 25.1767 26.595 23.9103 26.595 20.3553C26.595 17.2733 29.0362 15.8849 29.1735 15.7781C27.5562 13.459 25.0998 13.3979 24.4285 13.3979C22.6128 13.3979 21.1328 14.4965 20.2021 14.4965C19.1952 14.4965 17.8678 13.459 16.2962 13.459C13.3058 13.459 10.2695 15.9307 10.2695 20.5995C10.2695 23.4984 11.3986 26.5651 12.787 28.5486C13.9771 30.2269 15.0146 31.6001 16.5098 31.6001Z" fill="white"></path>
                        </svg>
                        <span>애플로 시작하기</span>
                    </div>
                }}>
            </AppleLogin>

            <div className="apple-box">
                <svg width="100%" height="100%" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.3242 13.1386C21.4075 13.1386 22.7654 12.4062 23.574 11.4297C24.3064 10.5448 24.8404 9.30893 24.8404 8.07308C24.8404 7.90525 24.8252 7.73741 24.7946 7.6001C23.5893 7.64587 22.1398 8.40874 21.2702 9.43099C20.5836 10.2091 19.958 11.4297 19.958 12.6808C19.958 12.8639 19.9885 13.047 20.0038 13.108C20.0801 13.1233 20.2021 13.1386 20.3242 13.1386ZM16.5098 31.6001C17.9898 31.6001 18.6459 30.6084 20.492 30.6084C22.3687 30.6084 22.7807 31.5696 24.4285 31.5696C26.0458 31.5696 27.129 30.0744 28.1513 28.6096C29.2956 26.9313 29.7686 25.2835 29.7991 25.2072C29.6923 25.1767 26.595 23.9103 26.595 20.3553C26.595 17.2733 29.0362 15.8849 29.1735 15.7781C27.5562 13.459 25.0998 13.3979 24.4285 13.3979C22.6128 13.3979 21.1328 14.4965 20.2021 14.4965C19.1952 14.4965 17.8678 13.459 16.2962 13.459C13.3058 13.459 10.2695 15.9307 10.2695 20.5995C10.2695 23.4984 11.3986 26.5651 12.787 28.5486C13.9771 30.2269 15.0146 31.6001 16.5098 31.6001Z" fill="white"></path>
                </svg>
                <span>애플로 시작하기</span>
            </div>
        </div>
    )
}

export default Login;