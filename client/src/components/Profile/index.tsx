import Header from '../Header'
import Sidebar from '../Sidebar'
import Feed from "../Feed"
import Rightbar from "../Rightbar"
import {
    BottomRightContainer,
    Container,
    RightContainer,
    TopRightContainer,
    ProfileImage,
    CoverImage,
    CoverContainer,
    ProfileInfo,
    Username,
    Description,
} from './StyledProfile'
import { useContext } from 'react'
import { AuthConetext } from 'context/auth/context'

type Props = {}

function Profile({ }: Props) {

    const { state } = useContext(AuthConetext as any);
    const userData = state.user?.userData;

    return (
        <>
            <Header />

            <Container>
                <Sidebar />

                <RightContainer>
                    <TopRightContainer>
                        <CoverContainer>
                            <CoverImage src={userData?.coverPicture || '/app_logo.jpeg'} alt="" />
                            <ProfileImage src={userData?.profilePicture || '/profile.png'} alt="" />
                        </CoverContainer>
                        <ProfileInfo>
                            <Username>{userData.username}</Username>
                            <Description>{userData.description}</Description>
                        </ProfileInfo>
                    </TopRightContainer>

                    <BottomRightContainer>
                        <Feed
                            fromProfile={true}
                        />
                        <Rightbar fromProfile={true} />
                    </BottomRightContainer>
                </RightContainer>
            </Container>
        </>
    )
}

export default Profile