import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useContext, useEffect, useState } from 'react';
import { PostTypes } from '../../types';
import {
    BottomSection,
    CenterSection,
    Comments,
    Container,
    LikeContainer,
    LikeCounter,
    LikeIcon,
    LikeOutlineIcon,
    PostDate,
    PostDescription,
    PostImage,
    ProfileImage,
    TopSection,
    UserInfo,
    UsernameText,
    Wrapper
} from './StyledPost'

import { format } from 'timeago.js';
import axios from 'axios';
import { AuthConetext } from 'context/auth/context';
import { BASE_URL, IMGAE_BASE_URL } from '../../constants';

function Post({ id, description, image, createdAt, likedBy, comments, author }: PostTypes) {
    let likes = 0;
    if (likedBy && likedBy.length) {
        likes = likedBy.length;
    }

    const [postLike, setPostLike] = useState(likes);
    const [liked, setLiked] = useState(false);

    const { state } = useContext(AuthConetext as any);
    const userData = state.user?.userData;

    const likeHandler = () => {
        try {
            axios.put(`${BASE_URL}/posts/${id}/like`, { userId: userData?.id });
        } catch (err) {
            console.log(err)
        }

        const newLikes = liked ? postLike - 1 : postLike + 1
        setPostLike(newLikes)

        setLiked(!liked);
    }

    useEffect(() => {
        if (likedBy && likedBy.length && userData.id) {
            const likedIndex = likedBy.findIndex((p: any) => p.id === userData.id);
            const alreadyLiked = likedIndex >= 0 ? true : false;

            setLiked(alreadyLiked);
        }
        else {
            setLiked(false)
        }
    }, [userData.id, likedBy]);

    const profileUrl = author?.profilePicture || '/profile.png';

    return (
        <Container>
            {
                description &&
                <Wrapper>
                    <TopSection>
                        <UserInfo>
                            <ProfileImage
                                src={profileUrl}
                                alt=""
                            />
                            <UsernameText> {author?.username} </UsernameText>
                            <PostDate> {format(createdAt)} </PostDate>
                        </UserInfo>

                        <MoreVertIcon />
                    </TopSection>

                    <CenterSection>
                        <PostDescription>
                            {description}
                        </PostDescription>
                        <PostImage
                            src={ `${IMGAE_BASE_URL}/${image}`}
                            alt=""
                        />
                    </CenterSection>

                    <BottomSection>
                        <LikeContainer>
                            <div onClick={likeHandler}>
                                {
                                    liked ?
                                        <LikeIcon /> :
                                        <LikeOutlineIcon />
                                }
                            </div>
                            <LikeCounter>
                                {postLike} likes
                            </LikeCounter>
                        </LikeContainer>

                        {/* <Comments>
                            {comments} comments
                        </Comments> */}
                    </BottomSection>
                </Wrapper>
            }
        </Container>
    )
}

export default Post