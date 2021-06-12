import React from 'react';
import Dialog from "./Dialogitem/Dialog";
import Message from "./Message/Messageitem";
import {Field} from "redux-form";
import {reduxForm} from "redux-form";
import {Textarea} from "../command/FormsControls/FormsControls";
import {maxLenghtCreator, requiredFild} from "../../Utils/Validators/Validator";
import {RightCircleOutlined} from "@ant-design/icons"

import "./Dialogs.scss"


const Dialogs = (props) => {

    let state = props.dialogsPage;
    let dialogsElements =
        state.dialogsDt.map((dialog) => <Dialog name={dialog.name} id={dialog.id}/>);

    let messagesElement =
        state.messagesData.map((message) => <Message id={message.id} message={message.message}/>);
    let addNewMessage = (values) => {
        props.sendMessage(values.newMassageBody);
    }

    return (
        <div className="message">
            <div className="message__item">
                {messagesElement}
            </div>
            <AddMessageFromRedux onSubmit={addNewMessage} />
        </div>

    )
}

const maxLenght10 = maxLenghtCreator(10);


const AddMessageFrom = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="message__input">
                <Field component={Textarea}
                       validate={[]}
                       name='newMassageBody'   placeholder='Enter your message' />
                <div>
                    <button className="message__button"><RightCircleOutlined /></button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFromRedux = reduxForm({form: 'dialogAddMessageFrom'}) (AddMessageFrom);

export default Dialogs;