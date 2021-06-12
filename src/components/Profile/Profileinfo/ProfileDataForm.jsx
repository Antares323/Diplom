import React from "react";
import {Form, Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../command/FormsControls/FormsControls";



export const createField = (placeholder,name,validators,component, props = {},text='') => {
   return( <div>
        <Field placeholder={placeholder} name={name} validate={validators} component={component} {...props} />
        <text />
    </div>)
}


const ProfileDataForm = ({profile, handleSubmit}) => {
    return (
        <Form onSubmit={handleSubmit}>
            <button>SAVE</button>
            <div>
                Full Name : {createField("Full name", 'fullName',[], Input)}
            </div>
            <div>
                {createField('','LookingForJob', [], Input, {type:"checkbox"})}
            </div>
            <div>
                {createField('','lookingForAJobDescription', [], Textarea, )}
            </div>
            <div>
                About me: {profile.aboutMe}
                {createField('','aboutMe', [], Textarea, )}
            </div>

            <div>
                Contact :   {Object.keys(profile.contacts).map(key => {
                return  <div>
                    <b>{key}: {createField(key, 'contacts.'+ key,[], Input)}</b>
                </div> })}
            </div>
        </Form>
    )
}
const ProfileReduxForm = reduxForm({form: 'data'})(ProfileDataForm)

export default ProfileReduxForm;