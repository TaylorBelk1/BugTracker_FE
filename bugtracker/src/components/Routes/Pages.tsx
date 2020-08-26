import React from 'react';
import { connect } from "react-redux";
import { Switch } from "react-router-dom";

import SignIn from './../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import Dashboard from '../Dashboard/Dashboard';

import PrivateRoute from './Private';
import PublicRoute from './Public';
import { UserState } from '../../Redux/models/user_models';
import { AppState } from '../../Redux/index';
import TicketMain from '../Dashboard/TicketView/TicketMain';

interface IProps {
    user: UserState
}

const Pages = (props: IProps) => {
    console.log(props.user)

    return(
        <Switch>
            <PublicRoute path='/' isAuth={props.user.loggedIn}
                exact={true} component={SignIn} />
            <PublicRoute path='/login' isAuth={props.user.loggedIn}
                exact={true} component={SignIn} />
            <PublicRoute path='/register' isAuth={props.user.loggedIn}
                exact={true} component={SignUp} />

            <PrivateRoute
                exact path='/dashboard'
                isAuth={props.user.loggedIn}
                component={Dashboard}
            />

            <PrivateRoute
                exact path='/tickets/:id'
                isAuth={props.user.loggedIn}
                component={TicketMain}
            />

            {/* <PrivateRoute path='/dashboard' isAuth={props.user.loggedIn}
                component={Dashboard} />
            <PrivateRoute path='/tickets/:id' isAuth={props.user.loggedIn}
                component={TicketMain} /> */}
        </Switch>
    )
}

const mstp = (state: AppState) => ({
    user: state.user
})

export default connect(mstp)(Pages);