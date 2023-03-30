import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import {setCookie} from 'src/hooks/Cookie'
import api from '../axios/api'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const loginOnsubmitHandler = async (user) => {
        const response = await api
            .post(`/login`, user)
            .then((response)=> {
                if(response.request.status === 200) {
                    // response body에 받아온 토큰 쿠키에 넣기
                    // console.log('response.data.token',response.data.token)
                    // document.cookie = `token=${response.data.token}`
                    setCookie("token", response.data.token , 1)
                    alert(response.data.message)
                    navigate('/main')
                }
            })
    }

    return (
        <form 
            onSubmit={(e) => {
            e.preventDefault();
            loginOnsubmitHandler(user)
            }}
        >
            <input
                required
                placeholder="이메일 주소"
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
                required
                placeholder="비밀번호"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <button>
                로그인
            </button >
            <div>
                계정이 없으신가요? <span onClick={()=>navigate('/signup')}>가입하기</span>
            </div>
        </form>
    )
}

export default Login;