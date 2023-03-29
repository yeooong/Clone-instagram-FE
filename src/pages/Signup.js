import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    // 이메일, 사용자 이름, 비밀번호, 프로필 이미지
    const [user, setUser] = useState({
        email: "",
        nickname: "",
        password: "",
        // profileImg: "",
    });

    // 프로필 이미지
    const [getProfileImg, setGetProfileImg] = useState('')

    // 오류메세지 상태 저장
    const [errorMessage, setErrorMessage] = useState({
        emailError: '',
        nicknameError: '',
        passwordError: '',
        profileImgError: '',
    })

    // input 핸들러 
    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const onChangeProfileImgHandler = (e) => {
        setGetProfileImg(e.target.files[0])
        console.log('getProfileImg->',e.target.files[0])
    };



    // 유효성 검사
    useEffect(() => {
        const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const nicknameRegExp = /^.{2,10}$/;
        const passwordRegExp = /^.{5,20}$/;

        setErrorMessage({
            emailError: emailRegExp.test(user.email)
                ? ''
                : '이메일 형식에 맞게 입력해주세요.',
            nicknameError: nicknameRegExp.test(user.nickname)
                ? ''
                : '2~10자 이내로 입력해주세요.',
            passwordError: passwordRegExp.test(user.password)
                ? ''
                : '5~20자 이내로 입력해주세요.'
        });
    }, [user]);


    // submit 핸들러
    const signupOnSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('profileImg', getProfileImg);
        formData.append('email', user.email);
        formData.append('nickname', user.nickname);
        formData.append('password', user.password);

        const response = await axios
            .post(`${process.env.REACT_APP_SERVER}/signup`, formData )
            .then((response) => {
                alert(response.data.message);
                navigate("/");
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    };

    // button disabled 
    const isDisabled = () => {
        return (
            errorMessage.emailError !== "" ||
            errorMessage.nicknameError !== "" ||
            errorMessage.passwordError !== "" ||
            user.email === "" ||
            user.nickname === "" ||
            user.password === ""
        );
    };


    return (
        <div>
            <form onSubmit={signupOnSubmitHandler}>
                <input
                    required
                    placeholder="email"
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={onChangeHandler}
                />
                <p style={{ color: "red" }}>{errorMessage.emailError}</p>
                <input
                    required
                    placeholder="nickname"
                    type="text"
                    name="nickname"
                    value={user.nickname}
                    onChange={onChangeHandler}
                />
                <p style={{ color: "red" }}>{errorMessage.nicknameError}</p>
                <input
                    required
                    placeholder="password"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={onChangeHandler}
                />
                <p style={{ color: "red" }}>{errorMessage.passwordError}</p>
                <input
                    type='file'
                    name='profileImg'
                    accept='image/*'
                    onChange={onChangeProfileImgHandler}
                />
                <button type="submit" disabled={isDisabled()}> 가입 </button >
            </form>
            <div>
                계정이 있으신가요?
                <Link to="/">로그인</Link>
            </div>
        </div>

    )
};

export default Signup;