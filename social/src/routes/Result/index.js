import { useEffect } from "react";
import { useLocation , useNavigate } from "react-router";

import { KAKAO_REST_API_KEY , REDIRECT_URI } from "../../data/keyData";

const Result = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const KAKAO_CODE = location.search.split('=')[1];
    const getKakaoToken = () => {
        if (!localStorage.getItem('kakao_token')) {
            fetch(`https://kauth.kakao.com/oauth/token` , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `grant_type=authorization_code&client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`
            })
                .then(res => res.json())
                .then(data => {
                    // if (data.access_token) {
                    //     localStorage.setItem('kakao_token', data.access_token);
                    //     navigate('/')
                    // }
                });
        } else {
            // navigate('/')
        }
    }; 

    useEffect(() => {
        if (!location.search) return;

        getKakaoToken();
    } , []);

    return (
        <div>LOGIN 성공!</div>
    )
}

export default Result