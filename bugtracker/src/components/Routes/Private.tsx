import React from "react";
import { Route, Redirect } from "react-router-dom";

interface IProps {
    exact?: boolean;
    path: string;
    isAuth: boolean | null;
    component: React.ComponentType<any>;
}

const PrivateRoute = ({
    component: Component,
    isAuth,
    ...otherProps
  }: IProps) => {
    return (
    <div>
      <Route
        render={otherProps => (
            isAuth 
            ? <Component {...otherProps} />
            : <Redirect to='/login' />
        )}
      />
    </div>
  )};

export default PrivateRoute