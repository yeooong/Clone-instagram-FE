import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const loginOnsubmitHandler = async (user) => {
        const response = await axios
            .post(`${process.env.REACT_APP_SERVER}/login`, user)
            .then((response)=> {
                if(response.request.status === 200) {
                    document.cookie = `token=${response.data.token}`
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