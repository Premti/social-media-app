import React from 'react';
import './Feed.css'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'

function Feed(){
    return <div className="feed">
        <StoryReel />
        <MessageSender />

        <Post 
        profilePic="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/18157874_10210897124057026_8516573728742171075_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=MK6kU8UejbMAX-E2XfZ&_nc_ht=scontent-lht6-1.xx&oh=b6d21f54b364b065675f0c979fe3a2c5&oe=5FBC196C"
        message="working?"
        timestamp="this is a timestamp"
        usename="Premti"
        image="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg"
        />
    </div>
}

export default Feed 