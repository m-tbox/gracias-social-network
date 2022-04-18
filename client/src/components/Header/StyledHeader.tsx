import styled from "styled-components"
import Search from '@mui/icons-material/Search'
import { Link } from "react-router-dom";

export const Container = styled.div`
    height: 50px;
    width: 100%;
    background-color: var(--app-theme-bg-color);
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    color: var(--app-theme-text-color);
    z-index: 999;
`

export const Logo = styled.span`
    font-size: 24px;
    margin-left: 20px;
    font-weight: bold;
    cursor: pointer;
`

export const LeftSection = styled.div`
   flex: 3;
`

export const CenterSection = styled.div`
   flex: 5;
`
export const RightSection = styled.div`
   flex: 4;
   display: flex;
   align-items: center;
   justify-content: space-around;
`

export const SearchBar = styled.div`
   width: 100%;
   height: 30px;
   background-color: white;
   border-radius: 30px;
   display: flex; 
   align-items: center;
`

export const Input = styled.input`
   border: none;
   width: 70%;
   :focus {
       outline: none;
   }
`

export const SearchIcon = styled(Search)`
    font-size: 20px !important;
    margin-left: 10px;
`;

export const LinkContainer = styled.div`
   margin-right: 10px;
   font-size: 14px;
   display: flex; 
   cursor: pointer;
`

export const OptionLink = styled(Link)`
   padding: 10px;
   text-decoration: none;
   color: var(--app-theme-text-color);
   background-color: pink;
`

export const IconContainer = styled.div`
   display: flex;
`
export const IconItem = styled.div`
   margin-right: 15px;
   cursor: pointer;
   position: relative;
`

export const BadgeNumber = styled.span`
    background-color: var(--badge-color);
    height: 15px;
    width: 15px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
`

export const ProfileImage = styled.img`
   height: 32px;
   width: 32px;
   border-radius: 50%;
   object-fit: cover;
   cursor: pointer;
`