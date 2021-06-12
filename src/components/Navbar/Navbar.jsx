import React from "react";
import './Navbar.css';
import {NavLink} from "react-router-dom";
import {
    MailOutlined,
    NotificationOutlined,
    PlayCircleOutlined,
    UsergroupAddOutlined,
    UserOutlined, WechatOutlined
} from '@ant-design/icons'
import HeaderContainer from "../Header/HeaderContainer";

const Navbar = () => {
    return (
        <div className="nav__bar">
            <HeaderContainer/>
            <nav>
                <NavLink className="nav__link" to='/profile'>
                    <UserOutlined/>
                    Profile
                </NavLink>
                <NavLink className="nav__link" to='/dialogs'>
                    <WechatOutlined />
                    Message
                </NavLink>
                <NavLink className="nav__link" to='/users'>
                    <UsergroupAddOutlined/>
                    Users
                </NavLink>
                <NavLink className="nav__link" to='/users'>
                    <PlayCircleOutlined />
                    Music
                </NavLink>
            </nav>
        </div>

    )
}

export default Navbar;