
import { useEffect } from "react";
import { REST_API_KEY , REDIRECT_URI , CLIENT_KEY } from "../../data/keyData";

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
            loginButton: {color: 'white' , type: 1, height: '47'},
            callbackHandle: true
        });

        naverLogin.init();
    }

    useEffect(() => {
        handleNaverLogin();
    } , [])

    return (
        <div>
            <div id="kakaoIdLogin">
                <a id="kakao-login-btn" onClick={handleKakaoLogin}>
                    <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
                </a>
            </div>

            <div id='naverIdLogin'></div>
        </div>
    )
}

export default Login;