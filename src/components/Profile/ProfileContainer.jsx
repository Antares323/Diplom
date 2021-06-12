import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";


import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";




class ProfileContainer extends React.Component {

    refrashProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.LogUserId
            if (!userId) {
                this.props.history.push('login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refrashProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refrashProfile();
        }

    }


    render() {
        return (
            <Profile  savePhoto={this.props.savePhoto} isOwner={!this.props.match.params.userId} {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} saveProfile={this.props.saveProfile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    LogUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus,savePhoto,saveProfile}),
    withRouter,
    AuthRedirect,
) (ProfileContainer)


