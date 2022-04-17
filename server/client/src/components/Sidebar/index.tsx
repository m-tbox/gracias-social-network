import { Users } from "../../dummyData"
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
} from "./StyledSidebar"


type Props = {}

function Sidebar({ }: Props) {
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

                <FriendListContainer>
                    {
                        Users.map((user: UserTypes) =>
                            <FriendListItem key={user.id}>
                                <FriendImg src={user.profilePicture} alt="" />
                                <FriendName>{user.username}</FriendName>
                            </FriendListItem>
                        )
                    }
                </FriendListContainer>
            </Wrapper>
        </Container>
    )
}

export default Sidebar