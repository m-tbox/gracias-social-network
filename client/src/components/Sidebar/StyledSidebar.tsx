import styled from "styled-components"
import RssFeed from '@mui/icons-material/RssFeed'
import Chat from '@mui/icons-material/Chat'
import VideoLibrary from '@mui/icons-material/VideoLibrary';
import Groups from '@mui/icons-material/Groups';
import Bookmark from '@mui/icons-material/Bookmark';
import HelpOutline from '@mui/icons-material/HelpOutline';
import WorkOutline from '@mui/icons-material/WorkOutline';
import Event from '@mui/icons-material/Event';
import School from '@mui/icons-material/School';

export const Container = styled.div`
    flex: 3;
    height: calc(100vh - 50px);
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-track {
        background-color: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
        background-color: rgb(179, 179, 179);
        border-radius: 3px;
    }
    position: sticky;
    top: 50px;
`

export const Wrapper = styled.div`
    padding: 20px;
`

export const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const ListItemText = styled.span`
`

export const Button = styled.button`
    width: 50%;
    border: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: 500;
`

export const HR = styled.hr`
    margin: 20px 0;
`

export const FriendListContainer = styled.ul`
    padding: 0;
    margin-top: 15px;
    list-style: none;
`

export const FriendTitle = styled.span`
    font-weight: bold;
`

export const FriendListItem = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
`

export const FriendImg = styled.img`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`

export const FriendName = styled.span`
`

export const RssFeedIcon = styled(RssFeed)`
    margin-right: 15px;
`;

export const ChatIcon = styled(Chat)`
    margin-right: 15px;
`;

export const VideoLibraryIcon = styled(VideoLibrary)`
    margin-right: 15px;
`;

export const GroupsIcon = styled(Groups)`
    margin-right: 15px;
`;

export const BookmarkIcon = styled(Bookmark)`
    margin-right: 15px;
`;

export const HelpOutlineIcon = styled(HelpOutline)`
    margin-right: 15px;
`;

export const WorkOutlineIcon = styled(WorkOutline)`
    margin-right: 15px;
`;

export const EventIcon = styled(Event)`
    margin-right: 15px;
`;

export const SchoolIcon = styled(School)`
    margin-right: 15px;
`;