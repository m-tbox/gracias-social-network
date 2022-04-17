import Post from "../Post"
import Share from "../Share"
import { Container, Wrapper } from "./StyledFeed"
import { Posts } from '../../dummyData'
import { PostTypes } from "../../types"

type Props = {
    fromProfile?: boolean
}


function Feed({ fromProfile }: Props) {
    return (
        <Container>
            <Wrapper>
                {!fromProfile && <Share />}

                {
                    Posts?.map((post: PostTypes, index: number) =>
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