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

import { Users } from '../../dummyData'
import { UserTypes } from "../../types"

type Props = {
  fromProfile?: boolean
}

function Rightbar({ fromProfile }: Props) {
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
        Online Friends
      </Title>

      <OnlineFriendList>
        {
          Users.map((user: UserTypes) =>
            <OnlineFriendListItem key={user.id}>
              <FriendProfileContainer>
                <FriendImage src={user.profilePicture} alt="" />

                <OnlineStatus></OnlineStatus>
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
          <InfoItemValue>New York</InfoItemValue>
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

      <UserFriends>User Friends</UserFriends>
      <FriendFollowing>
        <FriendFollowingItem>
          <FriendFollowingImage src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt="" />
          <FriendFollowingName>Rose rosy</FriendFollowingName>
        </FriendFollowingItem>

        <FriendFollowingItem>
          <FriendFollowingImage src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt="" />
          <FriendFollowingName>Tulip</FriendFollowingName>
        </FriendFollowingItem>

        <FriendFollowingItem>
          <FriendFollowingImage src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt="" />
          <FriendFollowingName>Lily</FriendFollowingName>
        </FriendFollowingItem>

        <FriendFollowingItem>
          <FriendFollowingImage src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt="" />
          <FriendFollowingName>Kate</FriendFollowingName>
        </FriendFollowingItem>

        <FriendFollowingItem>
          <FriendFollowingImage src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt="" />
          <FriendFollowingName>Jean</FriendFollowingName>
        </FriendFollowingItem>

        <FriendFollowingItem>
          <FriendFollowingImage src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg" alt="" />
          <FriendFollowingName>Sana</FriendFollowingName>
        </FriendFollowingItem>
      </FriendFollowing>
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