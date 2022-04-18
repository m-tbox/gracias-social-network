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
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { UserTypes } from 'types'
import { GET_SIGNFLE_USER } from '../../constants'

type Props = {}

function Profile({ }: Props) {
    let userIdInUrl = useParams().userId;

    let [userProfile, setUserProfile] = useState({} as UserTypes);

    useEffect(() => {
        let apiURL = `${GET_SIGNFLE_USER}/${userIdInUrl}`;
        const fetchUser = async () => {
            const res = await axios.get(apiURL);
            setUserProfile(res.data?.userData);
        };

        fetchUser();
    }, [userIdInUrl]);

    return (
        <>
            <Header />

            <Container>
                <Sidebar />

                <RightContainer>
                    <TopRightContainer>
                        <CoverContainer>
                            <CoverImage src={userProfile?.coverPicture || '/app_logo.jpeg'} alt="" />
                            <ProfileImage src={userProfile?.profilePicture || '/profile.png'} alt="" />
                        </CoverContainer>
                        <ProfileInfo>
                            <Username>{userProfile?.username}</Username>
                            <Description>{userProfile?.description}</Description>
                        </ProfileInfo>
                    </TopRightContainer>

                    <BottomRightContainer>
                        <Feed
                            fromProfile={true}
                            userId={userIdInUrl}
                        />
                        <Rightbar
                            fromProfile={true}
                            profileUserId={userIdInUrl}
                        />
                    </BottomRightContainer>
                </RightContainer>
            </Container>
        </>
    )
}

export default Profile