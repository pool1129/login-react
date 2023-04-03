
import { useEffect } from "react";
import { REST_API_KEY , REDIRECT_URI , CLIENT_KEY , CLIENT_ID} from "../../data/keyData";

import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const Login = () => {
    // 카카오 로그인
    const KAKAO_AUTO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

    const handleKakaoLogin = () => {
        window.location.href = KAKAO_AUTO_URL;
    }

    // 네이버 로그인
    // public > index.html script import
    const {naver} = window;
    const handleNaverLogin = () => {
        const naverLogin = new naver.LoginWithNaverId({
            clientId: CLIENT_KEY,
            callbackUrl : REDIRECT_URI,
            isPopup: false,
            loginButton: {color: 'green' , type: 3, height: '40'},
            callbackHandle: true
        });

        naverLogin.init();
    }

    useEffect(() => {
        handleNaverLogin();  //네이버 로그인
    } , [])

    return (
        <div>
            <div id="kakaoIdLogin">
                <a id="kakao-login-btn" onClick={handleKakaoLogin}>
                    <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" alt="카카오 로그인 버튼" />
                </a>
            </div>

            <div id='naverIdLogin'></div>

            <GoogleOAuthProvider clientId={`${CLIENT_ID}`}>
                <GoogleLogin
                    buttonText="구글로 계속하기"
                    clientId={`${CLIENT_ID}`}
                    onSuccess={(res) => console.log(res)}
                    onFailure={(res) => console.log(res)}
                />
            </GoogleOAuthProvider>


        </div>
    )
}

export default Login;