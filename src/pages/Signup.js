import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled, { StyleSheetManager } from "styled-components";
import api from '../axios/api'
import logo from '../assets/img/instagram.png'


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
                        <img src={logo} alt='User' width='200' height='100' onClick={() => window.location.replace('/main')} />
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
                            profile image
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
// 380*580

const StSignupWrap = styled.div`
    border: 1px solid gray;
    width: 400px;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto 0 auto;
`

const StSignupForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

const Guide = styled.div`
    display: flex;
    max-width: 300px;
    color: gray;
    font-size: 20px;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`

const StInputBox = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const StInput = styled.input`
    border: 1px solid gray;
    background-color: #F9F9F9;
    border-radius: 5px;
    width: 300px;
    height: 35px;
    margin-top: 20px;
    padding: 5px;
`

const StFileInputLabel = styled.label`
    background-color: #52AFF4;
    border-radius: 10px;
    height: 20px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-top: 10px;
    color: white;
    cursor: pointer;
`

const StFileInput = styled.input`
    display: none;
`

const StSubmitButton = styled.button`
    background-color: #52AFF4;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 13px 150px 13px 150px;
    margin-top: 10px;
    color: white;
    cursor: pointer;
`

const LoginNavBox = styled.div`
    border: 1px solid gray;
    width: 400px;
    height: 100px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LoginNav = styled.span`
    color: #52AFF4;
`