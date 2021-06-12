const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

    messagesData : [
        {id: 1, message: "Привет Alakey"} 
    ],
    dialogsDt: [
        
    ]
};

const dialogsReducer = (state = initialState,action) => {

     switch (action.type) {
         case SEND_MESSAGE:
             const body = action.newMassageBody;
             return {
                 ...state,
                 messagesData : [...state.messagesData, {id: 2, message: body}]
             };
         default :
             return state;
     }
}

export const sendMessageCreator = (newMassageBody) => ({type: SEND_MESSAGE, newMassageBody})


export default dialogsReducer;