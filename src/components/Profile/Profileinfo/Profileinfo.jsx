import React, {useState} from 'react';
import Preloader from "../../command/preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusHook from "./ProfileStatus/ProfileStatusHook";
import userPhoto from '../../../assets/images/292-2924858_user-icon-business-man-flat-png-transparent-png.jpg'
import Form from "redux-form/lib/Form";
import ProfileDataForm from "./ProfileDataForm";
import ProfileReduxForm from "./ProfileDataForm";
import {saveProfileSave} from "../../../redux/profile-reducer";
import {AliwangwangOutlined, EditOutlined} from "@ant-design/icons"
import "./Profile.scss"
import MyPostsContainer from "../Myposts/MyPostsContainer";



const photo = [
    {img:"https://thumbs.dreamstime.com/b/тропические-листья-листвые-леса-растения-кусты-коренной-природы-163670293.jpg"},
    {img:"https://thumbs.dreamstime.com/b/тропические-листья-листвые-леса-растения-кусты-коренной-природы-163670293.jpg"},
    {img:"https://thumbs.dreamstime.com/b/тропические-листья-листвые-леса-растения-кусты-коренной-природы-163670293.jpg"},
    {img:"https://thumbs.dreamstime.com/b/тропические-листья-листвые-леса-растения-кусты-коренной-природы-163670293.jpg"},

]




const Profileinfo = (props) => {

    let [editMode, setEditMode] = useState(false);


    if(!props.profile) {
        return (
            <Preloader />
        )
    }

    const mainPhotoSelect = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
       props.saveProfile(formData).then(
           () => {
               setEditMode(false)
           }
       )
    }


    return (

        <div className="profile">
            <div className="profile__header">
                <div className="profile__header-bg">

                </div>
                <div className="profile__header-menu">
                    
                </div>
                <div className="profile__user" >
                    <div className="profile__avatar">
                        <img src={props.profile.photos.large || userPhoto}/>
                        {props.isOwner && <input type={'file'} onChange={mainPhotoSelect}/> }
                    </div>
                    <div className="profile__name">
                        <p>{props.profile.fullName}</p>
                    </div>
                </div>

            </div>
            <div className="profile__info">
                <div className="profile__info-photos">
                    <div className="profile__info-title">Gallery</div>
                    <div className="profile__info-photo">
                        {photo.map(url => { return <img src={url.img}  alt="my_photo"/>})}
                    </div>
                </div>
                <div className="profile__info-me">
                    <div className="profile__info-container">
                        <div className="profile__info-status">
                            <p>
                                <ProfileStatusHook status={props.status} updateStatus={props.updateStatus}/>
                            </p>
                        </div>
                        <div>
                            <p>{props.profile.contacts.github}</p>
                        </div>
                        {editMode ? <ProfileReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> :
                            <ProfileData  profile={props.profile}
                                          isOwner={props.isOwner} toEditMode={() => {setEditMode(true)}}
                            />}
                    </div>
                </div>
                <div className="profile__info-post">
                    <MyPostsContainer  />
                </div>
            </div>

        </div>
    )
}

const ProfileData = ({profile, isOwner, toEditMode}) => {
    return (
        <div className="profile__data">
            <div className="profile__data-me">
                <p>Full Name : {profile.fullName}</p>
                <p>Loking for a job: {profile.lookingForAJob ? "yes" : "no"}</p>
                {profile.lookingForAJobDescription &&
                <p>
                    My dream job: {profile.lookingForAJobDescription}
                </p>}
                <p>
                    About Me: {profile.aboutMe}
                </p>
                <div>
                    <p><AliwangwangOutlined  style={{color: "#8224E3"}}/>Contact</p>  {Object.keys(profile.contacts).map(key => {
                    return   <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>})}
                </div>
            </div>
            <div>
                { isOwner && <i className="profile__button-edit" ><EditOutlined style={{color: "#8224E3"}} onClick={toEditMode} /></i>}
            </div>

        </div>
    )
}


const Contact = ({contactTitle,contactValue}) => {
    return (
        <div>
            <span className="profile__contact-title">{contactTitle}</span> : {contactValue}
        </div>
    )
}



export  default Profileinfo;