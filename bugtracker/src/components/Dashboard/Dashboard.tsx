import React from "react";
import { connect } from "react-redux";
import { AppState } from "../../Redux";

const Dashboard = () => {
    return (
        <div>Dashboard</div>
    )
}

const mstp = (state: AppState) => ({
    user: state.user
})

export default connect(mstp)(Dashboard);