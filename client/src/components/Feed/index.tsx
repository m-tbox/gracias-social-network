import Post from "../Post"
import Share from "../Share"
import { Container, Wrapper } from "./StyledFeed"
// import { Posts } from '../../dummyData'
import { PostTypes } from "../../types"
import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { PROFILE_POSTS, TIMELINE_URL } from "../../constants";
import { AuthConetext } from "context/auth/context"

type Props = {
    fromProfile?: boolean,
}


function Feed({ fromProfile }: Props) {
    const [posts, setPosts] = useState([]);
    const { state } = useContext(AuthConetext as any);
    const userData = state.user?.userData;
    const userId = userData?.id;

    useEffect(() => {
        const fetchTimeLine = async () => {
            let res = fromProfile ?
                await axios.get(`${PROFILE_POSTS}/${userId}`) :
                await axios.get(`${TIMELINE_URL}/${userId}`);

            setPosts(res.data ? res.data.posts : []);
        }

        fetchTimeLine();
    }, [userId]);

    return (
        <Container>
            <Wrapper>
                {!fromProfile && <Share />}

                {
                    posts?.map((post: PostTypes, index: number) =>
                        <Post
                            key={index}
                            {...post}
                        />
                    )}
            </Wrapper>
        </Container>
    )
}

export default Feed