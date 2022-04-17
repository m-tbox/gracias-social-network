import styled from "styled-components"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

export const Container = styled.div`
    width: 100%;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    box-shadow: 0px 0px 16px -8px rgba(0, 0, 0, 0.68);
    margin: 30px 0;
`

export const Wrapper = styled.div`
    padding: 10px;
`

export const TopSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
`

export const ProfileImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`
export const UsernameText = styled.span`
    font-size: 15px;
    font-weight: 500;
    margin: 0 10px;
`

export const PostDate = styled.span`
    font-size: 12px;
`

export const CenterSection = styled.div`
    margin: 20px 0;
`

export const PostImage = styled.img`
    margin-top: 20px;
    width: 100%;
    max-height: 500px;
    object-fit: contain;
`


export const BottomSection = styled.div`
    display: flex;
    align-items: center;   
    justify-content: space-between;
`

export const LikeContainer = styled.div`
    display: flex;
    align-items: center;   
`

export const LikeCounter = styled.span`
    font-size: 15px;
`

export const Comments = styled.span`
    cursor: pointer;
    border-bottom: 1px dashed gray;
    font-size: 15px;
`
export const LikeIcon = styled(ThumbUpIcon)`
    width: 24px;
    height: 24px;
    margin-right: 5px;
    cursor: pointer;
    color: var(--app-blue);
`;

export const LikeOutlineIcon = styled(ThumbUpOutlinedIcon)`
    width: 24px;
    height: 24px;
    margin-right: 5px;
    cursor: pointer;
    color: var(--app-blue);
`;