import styled from "styled-components"

export const Container = styled.div`
   display: flex;
`

export const RightContainer = styled.div`
   flex: 9;
`

export const TopRightContainer = styled.div`
    padding-bottom: 15px;
    border-bottom: 1px solid var(--app-border-color);
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`

export const BottomRightContainer = styled.div`
   display: flex;
`

export const CoverContainer = styled.div`
    height: 320px;
    position: relative;
`

export const CoverImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
`

export const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 150px;
    margin: auto;
    border: 3px solid white;
`

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Username = styled.span`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
`

export const Description = styled.span`
    font-weight: 300;
`