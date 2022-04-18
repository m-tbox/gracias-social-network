import {
    ShareOptionItemText,
    ShareOptionItem,
    BottomSection,
    ShareOptions,
    TopSection,
    ProfileImage,
    Container,
    Input,
    PermMediaIcon,
    LabelIcon,
    RoomIcon,
    EmojiEmotionsIcon,
    Form,
    ShareImage,
    CancelIcon,
    ShareImageContainer,
} from './StyledShare'
import Button from '../Button'
import { useContext, useRef, useState } from 'react'
import { AuthConetext } from 'context/auth/context'
import axios from 'axios'
import { NEW_POST_URL, UPLOAD_IMAGE_URL } from '../../constants'

type Props = {}
type PostType = {
    userId: number,
    description: string,
    image?: string
}

function Share({ }: Props) {

    const description = useRef<any>();
    const [file, setFile] = useState<any>(null);

    const { state } = useContext(AuthConetext as any);
    const userData = state.user?.userData;

    const handlePostUpload = async (e: any) => {
        e.preventDefault();

        var newPost: PostType = {
            userId: userData.id,
            description: description.current.value
        };

        if (file) {
            const fileName = Date.now() + file.name;
            const data = new FormData();

            data.append("name", fileName);
            data.append("file", file);
            newPost.image = fileName;

            try {

                const res = await axios.post(UPLOAD_IMAGE_URL, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Accept': 'application/json',
                    }
                });

            } catch (error) {
                console.log(error);
            }
        }

        try {
            await axios.post(NEW_POST_URL, newPost);
            window.location.reload();
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Form onSubmit={handlePostUpload}>
                <TopSection>
                    <ProfileImage
                        src={userData?.profilePicture || './profile.png'}
                        alt=""
                    />
                    <Input
                        placeholder="What's in your mind"
                        ref={description}
                        required
                    />
                </TopSection>

                <hr />

                {file && (
                    <ShareImageContainer>
                        <ShareImage src={URL.createObjectURL(file)} alt="" />
                        <CancelIcon onClick={() => setFile(null)} />
                    </ShareImageContainer>
                )}

                <BottomSection>
                    <ShareOptions>
                        <ShareOptionItem htmlFor="file">
                            <PermMediaIcon />
                            <ShareOptionItemText>
                                Photo
                            </ShareOptionItemText>

                            <input
                                style={{ display: "none" }}
                                type="file"
                                id="file"
                                accept=".png,.jpeg,.jpg"
                                onChange={(e: any) => setFile(e.target.files[0])}
                            />
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
                        type="submit"
                    />
                </BottomSection>
            </Form>
        </Container>
    )
}

export default Share