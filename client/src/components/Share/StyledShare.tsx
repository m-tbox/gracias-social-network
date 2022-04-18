import styled from "styled-components";
import {
    Cancel,
    PermMedia,
    Label,
    Room,
    EmojiEmotions
} from "@mui/icons-material";

export const Container = styled.div`
    width: 100%;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
`

export const Form = styled.form`
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
    height: 50px;
    :focus {
       outline: none;
    }
    font-size: 17px;
    border-bottom: 1px solid var(--app-border-color);
`

export const ShareOptions = styled.div`
    display: flex;
    margin-left: 20px;
`

export const ShareOptionItem = styled.label`
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

export const ShareImageContainer = styled.div`
    padding: 0 20px 10px 20px;
    position: relative;
`;

export const ShareImage = styled.img`
    width: 100%;
    object-fit: cover;
`;

export const CancelIcon = styled(Cancel)`
    position: absolute;
    top: 0;
    right: 20px;
    cursor: pointer;
    opacity: 0.7;
`;