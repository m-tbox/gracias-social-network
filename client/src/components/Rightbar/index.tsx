import {
  AdImage,
  BirthdayContainer,
  BirthdayImage,
  BirthdayText,
  Container,
  FriendFollowing,
  FriendFollowingItem,
  FriendFollowingName,
  FriendFollowingImage,
  FriendImage,
  FriendProfileContainer,
  InfoContainer,
  InfoItem,
  InfoItemLabel,
  InfoItemValue,
  OnlineFriendList,
  OnlineFriendListItem,
  OnlineStatus,
  Title,
  UserFriends,
  Wrapper,
  FollowButton,
  UnFollowButton,
  LogoutButton,
  LogoutConatiner
} from "./StyledRightbar"

import { UserTypes } from "../../types"
import { useContext, useEffect, useState } from "react"
import { AuthConetext } from "context/auth/context"
import axios from "axios"
import { BASE_URL, GET_ALL_USERS } from "../../constants"
import { useNavigate } from "react-router"

type Props = {
  fromProfile?: boolean,
  profileUserId?: string
}

function Rightbar({ fromProfile, profileUserId }: Props) {
  const { state, dispatch } = useContext(AuthConetext as any);
  const userData = state.user?.userData;
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  const followedUserIndex = userData?.following?.findIndex((u: UserTypes) => u.id == profileUserId);
  const [followed, setFollowed] = useState(followedUserIndex >= 0 ? true : false);

  const handleFollow = async () => {
    try {
      if (followed) {
        await axios.put(`${BASE_URL}/users/${userData.id}/unfollow`, { userId: profileUserId });
        dispatch({ type: "UNFOLLOW", payload: profileUserId });
      } else {
        await axios.put(`${BASE_URL}/users/${userData.id}/follow`, { userId: profileUserId });
        dispatch({ type: "FOLLOW", payload: profileUserId });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('user');
    dispatch({ type: "LOGIN_SUCCESS", payload: {} });
    navigate('/login');
  }

  useEffect(() => {
    const fetchTimeLine = async () => {
      let res = await axios.get(`${GET_ALL_USERS}`);
      setAllUsers(res?.data?.userData);

      const followedUserIndex = userData?.following?.findIndex((u: UserTypes) => u.id == profileUserId);
      setFollowed(followedUserIndex >= 0 ? true : false);
    }

    fetchTimeLine();
  }, [userData]);

  const HomeRightbar = () => (
    <>
      <BirthdayContainer>
        <BirthdayImage src="gift.png" alt="" />
        <BirthdayText>
          <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
        </BirthdayText>
      </BirthdayContainer>

      <AdImage src="mac-ad.jpeg" alt="" />
      <Title>
        Users
      </Title>

      <OnlineFriendList>
        {
          allUsers?.map((user: UserTypes) =>
            <OnlineFriendListItem to={`/profile/${user.id}`} key={user.id}>
              <FriendProfileContainer>
                <FriendImage src={user?.profilePicture || '/profile.png'} alt="" />

                {/* <OnlineStatus></OnlineStatus> */}
              </FriendProfileContainer>

              <span>
                {user.username}
              </span>
            </OnlineFriendListItem>
          )
        }
      </OnlineFriendList>
    </>
  )

  const ProfileRightbar = () => (
    <>
      <LogoutConatiner>
        {
          profileUserId != userData?.id && (
            <>
              {
                followed ?
                  <UnFollowButton onClick={handleFollow}>
                    Unfollow
                  </UnFollowButton> :

                  <FollowButton
                    title={"Follow"}
                    onClick={handleFollow}
                  />
              }
            </>
          )
        }

        <LogoutButton onClick={handleLogout}>
          Logout
        </LogoutButton>
      </LogoutConatiner>

      <h1>User Information</h1>
      <InfoContainer>
        <InfoItem>
          <InfoItemLabel>City: </InfoItemLabel>
          <InfoItemValue>{userData.city || 'Doha'}</InfoItemValue>
        </InfoItem>

        <InfoItem>
          <InfoItemLabel>Country: </InfoItemLabel>
          <InfoItemValue>Qatar</InfoItemValue>
        </InfoItem>

        <InfoItem>
          <InfoItemLabel>Profile: </InfoItemLabel>
          <InfoItemValue>Public</InfoItemValue>
        </InfoItem>
      </InfoContainer>

      {/* <UserFriends>User Friends</UserFriends>
      <FriendFollowing>

        {
          userData?.following.map((friend: UserTypes) =>
            <FriendFollowingItem>
              <FriendFollowingImage src={friend.profilePicture || '/profile.png'} alt="" />
              <FriendFollowingName>{friend.username}</FriendFollowingName>
            </FriendFollowingItem>
          )
        }
      </FriendFollowing> */}
    </>
  )

  return (
    <Container>
      <Wrapper>
        {
          fromProfile ?
            <ProfileRightbar /> :
            <HomeRightbar />
        }
      </Wrapper>
    </Container>
  )
}

export default Rightbar