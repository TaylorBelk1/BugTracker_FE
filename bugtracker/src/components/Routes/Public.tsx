import React from "react";
import { Route, Redirect } from "react-router-dom";

interface IProps {
    exact?: boolean;
    path: string;
    isAuth: boolean | null;
    component: React.ComponentType<any>;
}

const PublicRoute = ({
    component: Component,
    isAuth,
    ...otherProps
  }: IProps) => {
  return (
    <div>
      <Route
        render={otherProps => (
            isAuth
            ? <Redirect to='/dashboard' />
            : <Component {...otherProps} />
        )}
      />
    </div>
  )};

export default PublicRoute;