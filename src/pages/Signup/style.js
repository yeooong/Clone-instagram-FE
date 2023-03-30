import styled from "styled-components"

export const StSignupWrap = styled.div`
    border: 1px solid gray;
    width: 450px;
    height: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px auto 0 auto;
`

export const StSignupForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    cursor: pointer;
`

export const Guide = styled.div`
    display: flex;
    max-width: 300px;
    color: gray;
    font-size: 20px;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid gray;
`

export const StInputBox = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const StInput = styled.input`
    border: 1px solid gray;
    background-color: #F9F9F9;
    border-radius: 5px;
    width: 300px;
    height: 35px;
    margin-top: 20px;
    padding: 5px;
`

export const StFileInputLabel = styled.label`
    background-color: #F9F9F9;
    border: 1px solid gray;
    border-radius: 5px;
    height: 20px;
    width: 300px;
    display: flex;
    padding: 11px 5px 5px 11px;
    margin-top: 10px;
    color: gray;
    cursor: pointer;
    font-size: 13px;
`

export const StFileInput = styled.input`
    display: none;
`

export const StSubmitButton = styled.button`
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

export const StNavBox = styled.div`
    border: 1px solid gray;
    width: 450px;
    height: 100px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StNav = styled.span`
    color: #52AFF4;
    cursor: pointer;
`