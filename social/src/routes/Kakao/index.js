import { REST_API_KEY , REDIRECT_URI } from "../../data/keyData";

const Kakao = () => {
    const KAKAO_AUTO_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

    const handleLogin = () => {
        window.location.href = KAKAO_AUTO_URL;
    }

    return (
        <div>
            <a id="kakao-login-btn" onClick={handleLogin}>
                <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
            </a>
            <p id="token-result"></p>
        </div>
    )
}

export default Kakao