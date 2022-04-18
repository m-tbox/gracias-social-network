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

type Props = {}

function Profile({ }: Props) {
    return (
        <>
            <Header />

            <Container>
                <Sidebar />

                <RightContainer>
                    <TopRightContainer>
                        <CoverContainer>
                            <CoverImage src="https://pbs.twimg.com/media/FOKM2GVXoAw0T81?format=jpg&name=medium" alt="" />
                            <ProfileImage src="https://i.insider.com/623d200ea2e45b0019504e47?width=700" alt="" />
                        </CoverContainer>
                        <ProfileInfo>
                            <Username>Keanu</Username>
                            <Description>Hiii</Description>
                        </ProfileInfo>
                    </TopRightContainer>

                    <BottomRightContainer>
                        <Feed
                            userId={2}
                        />
                        <Rightbar fromProfile={true} />
                    </BottomRightContainer>
                </RightContainer>
            </Container>
        </>
    )
}

export default Profile