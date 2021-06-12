import React from 'react';
import Paginator from "../command/Paginator";
import User from "./User";
import userPhoto from "../../assets/images/avatar.png";


let Users = (props) => {
    const friends = props.users.filter( u => u.followed )
    debugger
    return (
        <div className="users">
            <div>
                <div className="users__paginator">
                    <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount}
                               pageSize={props.pageSize} onPageChanged={props.onPageChanged}/>
                </div>
                <div className="users__list">
                    {props.users.map(u => <User user={u} unfollow={props.unfollow} follow={props.follow}
                                                followingInProgress={props.followingInProgress} key={u.id}/>)}
                </div>
            </div>
            <div className="users__sidebar">
                <div className="users__friend">
                    <p className="users__friend-title">My friend</p>
                    {friends.map(friend =>
                        <div className="friend">
                            <div className="friend__avatar">
                                <img src={friend.photos.small || userPhoto }/>
                            </div>
                            <div className="friend__info">
                                <p className="friend__name">
                                    {friend.name}
                                </p>
                                <p className="friend__last-seen">
                                    last seen: 22:45
                                </p>
                            </div>
                        </div>
                        )}

                </div>
            </div>
        </div>
    )
}

export default Users;