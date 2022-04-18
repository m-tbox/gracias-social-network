import Post from "../Post"
import Share from "../Share"
import { Container, Wrapper } from "./StyledFeed"
// import { Posts } from '../../dummyData'
import { PostTypes } from "../../types"
import { useContext, useEffect, useState } from "react"
import axios from "axios";
import { PROFILE_POSTS, TIMELINE_URL } from "../../constants";

type Props = {
    fromProfile?: boolean,
    userId: string | number | undefined
}


function Feed({ fromProfile, userId }: Props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchTimeLine = async () => {
            let res = fromProfile ?
                await axios.get(`${PROFILE_POSTS}/${userId}`) :
                await axios.get(`${TIMELINE_URL}/${userId}`);

                console.log(res.data, 'WHYYYYY')

            setPosts(
                res.data?.posts.sort((p1: PostTypes, p2: PostTypes) => {
                    return +new Date(p2?.createdAt) - +new Date(p1?.createdAt);
                })
              );
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