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
import { useContext } from "react";
import { AuthConetext } from "context/auth/context";

type Props = {}

function Header({ }: Props) {

    const { state } = useContext(AuthConetext as any);

    const userData = state.user?.userData

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

                <OptionLink to={`/profile/${userData?.id}`}>
                    <ProfileImage src={
                        userData?.profilePicture || '/profile.png'
                    } 
                    alt=""
                     />
                </OptionLink>
            </RightSection>
        </Container>
    )
}

export default Header