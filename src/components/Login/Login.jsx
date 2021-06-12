import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../command/FormsControls/FormsControls";
import {maxLenghtCreator, requiredFild} from "../../Utils/Validators/Validator";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import "./Login.scss"





const maxLenght10 = maxLenghtCreator(10);

const LoginForm = ({handleSubmit,error,captchaUrl}) => {
    return ( <div className="login">
        <div className="login__form">
            <img className="login__img" src="https://eir.kntu.net.ua/jspui/retrieve/98b79019-a95f-4cdc-bb47-f43eb024bdae" alt="placeholder+image" />
            <form onSubmit={handleSubmit}>
                <div>
                    <h3>Ваша почта:</h3><Field placeholder={'Email'} name={'email'}
                        //validate={[requiredFild,maxLenght10]}
                           component={Input}/>
                </div>
                <div>
                    <h3>Ваш пароль:</h3><Field placeholder={'Password'} name={'password'} component={Input}/>
                </div>
                <div>
                    <h3>Капча:</h3><Field type={'checkbox'} name={'rememberMe'} component={Input}/>
                </div>
                { error && <div>}>
                    {error}
                </div>}
                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && <Field placeholder={'Symbols'} name={'captcha'} component={Input}/> }
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    </div>
    )
}

const ReduxLoginForm = reduxForm(
    {
        form: 'login'
    }
) (LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <ReduxLoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    captchaUrl:state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);