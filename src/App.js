import React from "react";
import Navbar from "./components/Navbar/Navbar";
import  {BrowserRouter, HashRouter, Route, withRouter, Switch,Redirect,} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/command/preloader/Preloader";
import store from "./redux/redux-store";
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));


class App extends React.Component {
    handleError = (reason, promise) => {
        alert(promise);
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("Error", this.handleError)
    }

    componentWillUnmount() {
        window.removeEventListener("Error", this.handleError)
    }


    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <section className="wrapper">
                <Navbar/>
                <div className="content" >
                    <Switch>
                        <Route exact path='/'
                               render={ () => <Redirect to={"/profile"} />} />
                        <Route path='/dialogs' render={() => {
                            return (<React.Suspense fallback={<div>Loading...</div>}>
                                <DialogsContainer/>
                            </React.Suspense>)}}
                        />
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route path='/users' render={() => <UsersContainer/>} />
                    </Switch>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

let SocialJSApp = (props) => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SocialJSApp