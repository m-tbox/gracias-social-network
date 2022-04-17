import styled from "styled-components"


export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
    width: 70%;
    height: 70%;
    display: flex;
`

export const FormContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FormBoxContainer = styled.div`
    height: 80%;
    padding: 20px;
    background-color: rgba(243, 224, 201, 0.5);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`

export const AppInfoContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const AppTitle = styled.h3`
    font-size: 50px;
    font-weight: 800;
    color: var(--app-theme-bg-color);
    margin-bottom: 10px;
`

export const AppDescription = styled.span`
    font-size: 24px;
`

export const Input = styled.input`
    height: 50px;
    border-radius: 10px;
    border: 1px solid gray;
    font-size: 18px;
    padding-left: 20px;
    :focus {
        outline: none;
    }
`

export const SignupLink = styled.span`
    text-align: center;
    color: var(--app-blue);
    cursor: pointer;
`