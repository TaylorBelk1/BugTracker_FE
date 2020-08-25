import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { AppState } from "../../Redux";
import { UserState } from '../../Redux/models/user_models';
import TicketsTable from "./TicketsTable/TicketsTable";
import Nav from "./Navigation/Nav";
import { getUserTickets } from '../../Redux/actions/ticket_actions';
import { setLoadingState } from "../../Redux/actions/event_actions";
import { LoadingState } from "../../Redux/models/event_models";
import Loading from "../loading";

interface IProps {
    user: UserState;
    loading: LoadingState;
}

const Dashboard = (props: IProps) => {
    const { user } = props;
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        getUserTickets({username: user.user.username}, user.token);
        setIsLoading(false);
    }, [user])

    return (
        <div>
            <Nav />
            <h1>Welcome back, {user.user.first_name}</h1>
            { isLoading 
                ? <Loading />
                : <TicketsTable /> 
            }
        </div>
        )
}

const mstp = (state: AppState) => ({
    user: state.user,
    loading: state.loading
})

export default connect(mstp, {
    setLoadingState,
    getUserTickets
})(Dashboard);