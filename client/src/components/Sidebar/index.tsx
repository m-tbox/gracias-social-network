import { AuthConetext } from "context/auth/context"
import { useContext } from "react"
import { useNavigate } from "react-router"
import { UserTypes } from "../../types"
import {
    ListItemText,
    Container,
    List,
    ListItem,
    Wrapper,
    RssFeedIcon,
    ChatIcon,
    VideoLibraryIcon,
    GroupsIcon,
    BookmarkIcon,
    HelpOutlineIcon,
    WorkOutlineIcon,
    EventIcon,
    SchoolIcon,
    Button,
    HR,
    FriendListContainer,
    FriendListItem,
    FriendImg,
    FriendName,
    FriendTitle,
} from "./StyledSidebar"


type Props = {}

function Sidebar({ }: Props) {
    const { state } = useContext(AuthConetext as any);
    const userData = state.user?.userData;
    const navigate = useNavigate();

    const handleFriendClick = (friendId: string) => {
        navigate('/login');
        navigate(`/profile/${friendId}`, { replace: true });
    }

    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItem>
                        <RssFeedIcon />
                        <ListItemText>
                            Feed
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ChatIcon />
                        <ListItemText>
                            Chat
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <VideoLibraryIcon />
                        <ListItemText>
                            Videos
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <GroupsIcon />
                        <ListItemText>
                            Groups
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <BookmarkIcon />
                        <ListItemText>
                            Bookmarks
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <HelpOutlineIcon />
                        <ListItemText>
                            Questions
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <WorkOutlineIcon />
                        <ListItemText>
                            Jobs
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <EventIcon />
                        <ListItemText>
                            Events
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <SchoolIcon />
                        <ListItemText>
                            Cources
                        </ListItemText>
                    </ListItem>
                </List>

                <Button>
                    Show More
                </Button>
                <HR />

                <FriendTitle>User Friends</FriendTitle>

                <FriendListContainer>
                    {
                        userData.following.map((friend: UserTypes) =>
                            <FriendListItem
                                onClick={() => handleFriendClick(friend.id)}
                                key={friend.id}
                            >
                                <FriendImg src={friend.profilePicture || '/profile.png'} alt="" />
                                <FriendName>{friend.username}</FriendName>
                            </FriendListItem>
                        )
                    }
                </FriendListContainer>
            </Wrapper>
        </Container>
    )
}

export default Sidebar