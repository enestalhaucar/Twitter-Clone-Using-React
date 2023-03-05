import React, {useState} from 'react'
import { HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, BookmarksIcon, ListsIcon, ProfileIcon, MoreIcon } from "../Layout/Icon";
import twitterLogo from "../images/twitter.svg";
import Sidelinks from '../components/Sidelinks';
import UserBox from '../components/UserBox';
const sideLinks = [
    {
        name: 'Home',
        icon: HomeIcon
    },
    {
        name: 'Explore',
        icon: ExploreIcon
    },
    {
        name: 'Notifications',
        icon: NotificationsIcon
    },
    {
        name: 'Messages',
        icon: MessagesIcon
    },
    {
        name: 'Bookmarks',
        icon: BookmarksIcon
    },
    {  
        name: 'Lists',
        icon: ListsIcon
    },
    {
        name: 'Profile',
        icon: ProfileIcon
    },
    {
        name: 'More',
        icon: MoreIcon
    }


];

const Sidebar = () => {
    const [active,setActive] = useState("Home")
    const handleMenuItemClick = (name) => {
        setActive(name)
    }
    return (
        <div className="flex flex-col justify-between w-72 bg-white">
            <div>
                <div className='mt-1 mb-4 ml-1 rounded-full flex items-center justify-center w-10 h-10 hover:bg-gray-lightest'>
                    <img src={twitterLogo} alt='TwitterLogo' className='w-9 h-9' />
                </div>
                <nav className='mb-4'>
                    <ul>
                        {sideLinks.map(({name, icon }) => (
                            <Sidelinks key={name} name={name} Icon={icon} active={active} onMenuItemClick={handleMenuItemClick}/>
                        ))}
                    </ul>
                </nav>
                <button className='bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full py-3 px-8 w-11/12 mx-auto transform transition-colors duration-200'>Tweet</button>

            </div>
            <UserBox />

        </div>
    );
}

export default Sidebar