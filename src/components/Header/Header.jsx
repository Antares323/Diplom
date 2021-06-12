import React from "react";
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/logo_black.png';
import userPhoto from "../../assets/images/logo.png";
import {WalletOutlined} from "@ant-design/icons"
import './Header.css'

const Header = (props) => {
    return (
        <header className="header">
            <div className="header__login">
                <div className="header__login-block">
                    <div className="header__avatar">{props.profile ?
                        <img src={props.profile.photos.small}/> : undefined }
                    </div>
                    {props.isAuth ?
                        <div>
                            <div>
                                <p>
                                    {props.login}
                                </p>
                        </div>
                        </div> :
                        <div>
                            <NavLink to={'/login'}>
                                Login
                            </NavLink>
                        </div>
                    }
               </div>

                {props.isAuth ?
                <div className="header__logout" onClick={props.logout}>
                    <div>
                        <p>Logout</p>
                    </div>
                    <div>
                        <i>
                            <WalletOutlined />
                        </i>
                    </div>
                </div> : undefined }
            </div>
        </header>
    )
}

export default Header;