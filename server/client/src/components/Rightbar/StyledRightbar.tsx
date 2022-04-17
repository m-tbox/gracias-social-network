import styled from "styled-components"

export const Container = styled.div`
    flex: 3.5;
`

export const Wrapper = styled.div`
    padding: 20px 20px 0 0;
`

export const BirthdayContainer = styled.div`
    display: flex;
    align-items: center;
`

export const BirthdayImage = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`

export const BirthdayText = styled.span`
    font-weight: 300;
    font-size: 15px;
`

export const AdImage = styled.img`
    width: 100%;
    border-radius: 10px;
    margin: 30px 0;
`

export const Title = styled.h4`
    margin-bottom: 20px;
`

export const OnlineFriendList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`

export const OnlineFriendListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`

export const FriendProfileContainer = styled.div`
    margin-right: 10px;
    position: relative;

`

export const FriendImage = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    object-fit: cover;
`

export const OnlineStatus = styled.span`
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background-color: var(--online-green);
    position: absolute;
    top: -2px;
    right: 0;
    border: 2px solid white;
`

export const InfoContainer = styled.div`
    margin-bottom: 30px;
`

export const InfoItem = styled.div`
    margin-bottom: 10px;
`

export const InfoItemLabel = styled.span`
    font-weight: 500;
    margin-right: 15px;
    color: #555;
`

export const InfoItemValue = styled.span`
    font-weight: 300;
`

export const UserFriends = styled.h4`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
`

export const FriendFollowing = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const FriendFollowingItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    cursor: pointer;
`

export const FriendFollowingImage = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
`

export const FriendFollowingName = styled.span`
`