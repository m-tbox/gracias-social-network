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


function Post({ id, description, image, userId, date, likes, comments }: PostTypes) {
    const [postLike, setPostLike] = useState(likes);
    const [liked, setLiked] = useState(false);

    const likeHandler = () => {
        if (postLike) {
            const newLikes = liked ? postLike - 1 : postLike + 1
            setPostLike(newLikes)

            setLiked(!liked)
        }
    }

    return (
        <Container>
            <Wrapper>
                <TopSection>
                    <UserInfo>
                        <ProfileImage
                            src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTc5ODc1NTM4NjMyOTc2Mzcz/gettyimages-693134468.jpg"
                            alt=""
                        />
                        <UsernameText> Tom Cruise </UsernameText>
                        <PostDate> {date} </PostDate>
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