import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../axios/api'
import logo from '../../assets/img/instagram.png'
import {
    StSignupWrap, StSignupForm, Logo, Guide, 
    StInputBox, StInput, StFileInputLabel, StFileInput, 
    StSubmitButton, LoginNavBox, LoginNav
} from './style'


const Signup = () => {

    const navigate = useNavigate();

    // 이메일, 사용자 이름, 비밀번호, 프로필 이미지
    const [user, setUser] = useState({
        email: "",
        nickname: "",
        password: "",
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
        console.log('getProfileImg->', e.target.files[0])
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

        const response = await api
            .post(`/signup`, formData)
            .then((response) => {
                alert(response.data.message);
                navigate("/");
            })
            .catch((error) => {
                alert(error.response.data.message);
            });
    };

    // 모든 조건을 충족할 때만 버튼 활성화
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
        <>
            <StSignupWrap>
                <StSignupForm onSubmit={signupOnSubmitHandler}>
                    <Logo>
                        <img src={logo} alt='User' width='200' height='100' onClick={() => window.location.replace('/')} />
                    </Logo>
                    <Guide>친구들의 사진과 동영상을 보려면 가입하세요.</Guide>
                    <StInputBox>
                        <StInput
                            required
                            placeholder="email"
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={onChangeHandler}
                        />
                        <p style={{ color: "red" }}>{errorMessage.emailError}</p>
                        <StInput
                            required
                            placeholder="nickname"
                            type="text"
                            name="nickname"
                            value={user.nickname}
                            onChange={onChangeHandler}
                        />
                        <p style={{ color: "red" }}>{errorMessage.nicknameError}</p>
                        <StInput
                            required
                            placeholder="password"
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={onChangeHandler}
                        />
                        <p style={{ color: "red" }}>{errorMessage.passwordError}</p>
                        <StFileInputLabel 
                        htmlFor="profileImg"
                        >
                            프로필 이미지를 업로드해주세요.
                        </StFileInputLabel>
                        <StFileInput
                            required
                            id='profileImg'
                            type='file'
                            name='profileImg'
                            accept='image/*'
                            onChange={onChangeProfileImgHandler}
                        />
                    </StInputBox>
                    <StSubmitButton type="submit" disabled={isDisabled()}> 가입 </StSubmitButton >
                </StSignupForm>
            </StSignupWrap>
            <LoginNavBox>
                계정이 있으신가요?<LoginNav onClick={() => navigate('/')}>&nbsp;로그인</LoginNav>
            </LoginNavBox>
        </>
    )
};

export default Signup;