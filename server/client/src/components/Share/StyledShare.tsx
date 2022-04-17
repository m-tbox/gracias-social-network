import styled from "styled-components"
import PermMedia from '@mui/icons-material/PermMedia';
import Label from '@mui/icons-material/Label';
import Room from '@mui/icons-material/Room';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';

export const Container = styled.div`
    width: 100%;
    height: 170px;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`

export const Wrapper = styled.div`
    padding: 10px;
`

export const TopSection = styled.div`
    display: flex;
    align-items: center;
`

export const BottomSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

export const Input = styled.input`
    border: none;
    width: 80%;
    :focus {
       outline: none;
    }
`

export const ShareOptions = styled.div`
    display: flex;
    margin-left: 20px;
`

export const ShareOptionItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
`

export const ShareOptionItemText = styled.span`
    font-size: 14px;
    font-weight: 500;
`

export const PermMediaIcon = styled(PermMedia)`
    font-size: 18px;
    margin-right: 3px;
    color: tomato;
`;

export const LabelIcon = styled(Label)`
    font-size: 18px;
    margin-right: 3px;
    color: lightblue;
`;

export const RoomIcon = styled(Room)`
    font-size: 18px;
    margin-right: 3px;
    color: var(--app-blue)
`;

export const EmojiEmotionsIcon = styled(EmojiEmotions)`
    font-size: 18px;
    margin-right: 3px;
    color: goldenrod;
`;