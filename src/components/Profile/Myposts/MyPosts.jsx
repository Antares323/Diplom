import React from 'react';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, requiredFild} from "../../../Utils/Validators/Validator";
import {Textarea} from "../../command/FormsControls/FormsControls";
import "./MyPosts.scss"


const MyPosts = React.memo(props => {
    let postsElements =
        props.posts.map((posts) =>
            <Post message={posts.message} id={posts.id}/>);


    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className="post">
            <div className="post__header">
                <p className="post__title">My posts</p>
                <MypostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className="post__item">
                {postsElements}
            </div>
        </div>
    )
});

const maxLenght10 = maxLenghtCreator(20);

let MypostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field validate={[maxLenght10]}  component={Textarea} name="newPostText" placeholder="Enter your post" />
            <button className="post__button" >Add post
            </button>
        </form>
    )
}

let MypostFormRedux = reduxForm({form:'addPost'})(MypostForm)


export default MyPosts;