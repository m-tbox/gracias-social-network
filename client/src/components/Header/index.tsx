import {
    Container,
    LeftSection,
    CenterSection,
    RightSection,
    SearchBar,
    Input,
    OptionLink,
    LinkContainer,
    IconItem,
    BadgeNumber,
    IconContainer,
    ProfileImage,
    SearchIcon,
    Logo,
} from "./StyledHeader"
import PersonIcon from '@mui/icons-material/Person'
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

type Props = {}

function Header({ }: Props) {
    return (
        <Container>
            <LeftSection>
                <OptionLink to="/">
                    <Logo>
                        Gracias
                    </Logo>
                </OptionLink>
            </LeftSection>

            <CenterSection>
                <SearchBar>
                    <SearchIcon />
                    <Input placeholder="Search for friends or posts" />
                </SearchBar>
            </CenterSection>

            <RightSection>
                <LinkContainer>
                    <OptionLink to="/">Homepage</OptionLink>
                    <OptionLink to="/">Timeline</OptionLink>
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

                <OptionLink to="/profile/2">
                    <ProfileImage src="https://i.insider.com/623d200ea2e45b0019504e47?width=700" alt="" />
                </OptionLink>
            </RightSection>
        </Container>
    )
}

export default Header