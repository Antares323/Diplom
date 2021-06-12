import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";




let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMassageBody) => {
            dispatch(sendMessageCreator(newMassageBody));
        },
    }
}





export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    AuthRedirect,

) (Dialogs);