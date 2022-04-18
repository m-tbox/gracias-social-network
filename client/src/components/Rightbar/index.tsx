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
  Wrapper
} from "./StyledRightbar"

import { UserTypes } from "../../types"
import { useContext, useEffect, useState } from "react"
import { AuthConetext } from "context/auth/context"
import axios from "axios"
import { GET_ALL_USERS } from "../../constants"

type Props = {
  fromProfile?: boolean
}

function Rightbar({ fromProfile }: Props) {
  const { state } = useContext(AuthConetext as any);
  const userData = state.user?.userData;
  const [allUsers, setAllUsers] = useState([]);


  useEffect(() => {
    const fetchTimeLine = async () => {
      let res = await axios.get(`${GET_ALL_USERS}`);
      setAllUsers(res?.data?.userData);
    }

    fetchTimeLine();
  }, []);

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
        All Users
      </Title>

      <OnlineFriendList>
        {
          allUsers?.map((user: UserTypes) =>
            <OnlineFriendListItem to={`profile/${user.id}`} key={user.id}>
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
      <h1>User Information</h1>
      <InfoContainer>
        <InfoItem>
          <InfoItemLabel>City: </InfoItemLabel>
          <InfoItemValue>{userData.city}</InfoItemValue>
        </InfoItem>

        <InfoItem>
          <InfoItemLabel>From: </InfoItemLabel>
          <InfoItemValue>Madrid</InfoItemValue>
        </InfoItem>

        <InfoItem>
          <InfoItemLabel>Relationship: </InfoItemLabel>
          <InfoItemValue>Single</InfoItemValue>
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