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

type Props = {}

function Share({ }: Props) {
    return (
        <Container>
            <Wrapper>
                <TopSection>
                    <ProfileImage
                        src="https://i.insider.com/623d200ea2e45b0019504e47?width=700"
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