import {
    ShareOptionItemText,
    ShareOptionItem,
    BottomSection,
    ShareOptions,
    TopSection,
    ProfileImage,
    Container,
    Input,
    Wrapper,
    PermMediaIcon,
    LabelIcon,
    RoomIcon,
    EmojiEmotionsIcon,
} from './StyledShare'
import Button from '../Button'
import { useContext } from 'react'
import { AuthConetext } from 'context/auth/context'

type Props = {}

function Share({ }: Props) {

    const { state } = useContext(AuthConetext as any);
    const userData = state.user?.userData;

    return (
        <Container>
            <Wrapper>
                <TopSection>
                    <ProfileImage
                        src={userData?.profilePicture || './profile.png'}
                        alt=""
                    />
                    <Input placeholder="What's in your mind" />
                </TopSection>

                <hr />

                <BottomSection>
                    <ShareOptions>
                        <ShareOptionItem>
                            <PermMediaIcon />
                            <ShareOptionItemText>
                                Photo or Video
                            </ShareOptionItemText>
                        </ShareOptionItem>

                        <ShareOptionItem>
                            <LabelIcon />
                            <ShareOptionItemText>
                                Tag
                            </ShareOptionItemText>
                        </ShareOptionItem>

                        <ShareOptionItem>
                            <RoomIcon />
                            <ShareOptionItemText>
                                Location
                            </ShareOptionItemText>
                        </ShareOptionItem>

                        <ShareOptionItem>
                            <EmojiEmotionsIcon />
                            <ShareOptionItemText>
                                Feelings
                            </ShareOptionItemText>
                        </ShareOptionItem>
                    </ShareOptions>

                    <Button
                        title="Post"
                    />
                </BottomSection>
            </Wrapper>
        </Container>
    )
}

export default Share