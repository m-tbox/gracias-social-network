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


function Feed({ fromProfile, userId }: Props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchTimeLine = async () => {
            let apiUrl = fromProfile ? `${BASE_URL}/${TIMELINE_URL}/2` : `${BASE_URL}/${PROFILE_POSTS}/${userId}`;
            let res = await axios.get(apiUrl);
            console.log(res.data)
            setPosts(res.data ? res.data.posts : []);
        }

        fetchTimeLine();
    }, []);

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