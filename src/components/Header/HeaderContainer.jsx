import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import profileReducer from "../../redux/profile-reducer";


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    avatar: state.auth.avatar,
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {logout,profileReducer} ) (HeaderContainer);