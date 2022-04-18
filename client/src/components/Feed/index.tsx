import Post from "../Post"
import Share from "../Share"
import { Container, Wrapper } from "./StyledFeed"
// import { Posts } from '../../dummyData'
import { PostTypes } from "../../types"
import { useEffect, useState } from "react"
import axios from "axios";
import { BASE_URL, PROFILE_POSTS, TIMELINE_URL } from "../../constants";

type Props = {
    fromProfile?: boolean,
    userId?: number
}


function Feed({ userId }: Props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchTimeLine = async () => {
            let res = userId ?
                await axios.get(`${BASE_URL}/${PROFILE_POSTS}/${userId}`) :
                await axios.get(`${BASE_URL}/${TIMELINE_URL}/2`);

            setPosts(res.data ? res.data.posts : []);
        }

        fetchTimeLine();
    }, []);

    return (
        <Container>
            <Wrapper>
                {!userId && <Share />}

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