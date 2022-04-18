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
import { useNavigate } from 'react-router-dom';

type Props = {}

function Header({ }: Props) {
    const navigate = useNavigate();
    
    const openProfilePage = () => {
        navigate('/profile/2');
    }

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

                <ProfileImage
                    src="https://i.insider.com/623d200ea2e45b0019504e47?width=700"
                    alt=""
                    onClick={openProfilePage}
                />
            </RightSection>
        </Container>
    )
}

export default Header