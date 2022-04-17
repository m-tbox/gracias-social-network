import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
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
    PostImage,
    ProfileImage,
    TopSection,
    UserInfo,
    UsernameText,
    Wrapper
} from './StyledPost'

import {format} from 'timeago.js';

function Post({ id, description, image, createdAt, likedBy, comments, author }: PostTypes) {
    let likes = 0;
    if (likedBy && likedBy.length) {
        likes = likedBy.length;
    }

    const [postLike, setPostLike] = useState(likes);
    const [liked, setLiked] = useState(false);

    const likeHandler = () => {
        if (postLike) {
            const newLikes = liked ? postLike - 1 : postLike + 1
            setPostLike(newLikes)

            setLiked(!liked)
        }
    }

    const profileUrl = author?.profilePicture || 'profile.png';

    return (
        <Container>
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
                    <span>
                        {description}
                    </span>
                    <PostImage
                        src={image}
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

                    <Comments>
                        {comments} comments
                    </Comments>
                </BottomSection>
            </Wrapper>
        </Container>
    )
}

export default Post