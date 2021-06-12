import React from 'react';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/avatar.png";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className="users__list-item">
            <div className="users__list-avatar">
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.small != null ? user.small : userPhoto} />
                </NavLink>
            </div>
            <div className="users__list-about">
                <div className="users__list-name">{user.name}</div>
                <div className="users__list-status">{user.status || "None Status"}</div>
            </div>
            <div className="users__list-followed">
                {user.followed
                    ? <button className="users__list-followed-btn" disabled={followingInProgress.some(id => id == user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>Unfollow</button>
                    : <button className="users__list-followed-btn" disabled={followingInProgress.some(id => id == user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>}
            </div>
        </div>)
}

export default User;