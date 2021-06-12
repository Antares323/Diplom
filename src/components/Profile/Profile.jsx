import React from "react";
import MyPosts from "./Myposts/MyPosts";
import Profileinfo from "./Profileinfo/Profileinfo";
import MyPostsContainer from "./Myposts/MyPostsContainer";
import {updateStatus} from "../../redux/profile-reducer";


const Profile = (props) => {
    debugger
    return (
        <div >
            <Profileinfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus} saveProfile={props.saveProfile} />

        </div>
    )
}

export default Profile;