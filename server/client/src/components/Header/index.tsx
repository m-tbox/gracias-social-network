import {
    Container,
    LeftSection,
    CenterSection,
    RightSection,
    SearchBar,
    Input,
    Link,
    LinkContainer,
    IconItem,
    BadgeNumber,
    IconContainer,
    ProfileImage,
    SearchIcon,
    Logo
} from "./StyledHeader"
import PersonIcon from '@mui/icons-material/Person'
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

type Props = {}

function Header({ }: Props) {
    return (
        <Container>
            <LeftSection>
                <Logo>
                    Gracias
                </Logo>
            </LeftSection>

            <CenterSection>
                <SearchBar>
                    <SearchIcon />
                    <Input placeholder="Search for friends or posts" />
                </SearchBar>
            </CenterSection>

            <RightSection>
                <LinkContainer>
                    <Link>Homepage</Link>
                    <Link>Timeline</Link>
                </LinkContainer>

                <IconContainer>
                    <IconItem>
                        <PersonIcon />
                        <BadgeNumber>1</BadgeNumber>
                    </IconItem>
                    <IconItem>
                        <ChatIcon />
                        <BadgeNumber>2</BadgeNumber>
                    </IconItem>
                    <IconItem>
                        <NotificationsIcon />
                        <BadgeNumber>1</BadgeNumber>
                    </IconItem>
                </IconContainer>

                <ProfileImage src="https://i.insider.com/623d200ea2e45b0019504e47?width=700" alt="" />
            </RightSection>
        </Container>
    )
}

export default Header