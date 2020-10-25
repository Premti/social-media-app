import React from 'react'
import SidebarRow from './SidebarRow'
import "./Sidebar.css"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags"
import PeopleIcon from "@material-ui/icons/People"
import ChatIcon from "@material-ui/icons/Chat"
import StorefrontIcon from "@material-ui/icons/Storefront"
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary"
import { ExpandMoreOutlined } from "@material-ui/icons"

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/18157874_10210897124057026_8516573728742171075_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=MK6kU8UejbMAX-E2XfZ&_nc_ht=scontent-lht6-1.xx&oh=b6d21f54b364b065675f0c979fe3a2c5&oe=5FBC196C" title="Premti"/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined}/>
        </div>
    )
}

export default Sidebar