import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { loginUser } from '../../Redux/actions/user_actions';
import { Link } from "react-router-dom";

interface IFormData {
    username: string;
    password: string;
}

function SignIn() {
    const { register, handleSubmit, errors } = useForm<IFormData>();

    const [submitting, setSubmitting] = useState<boolean>(false);

    return (
        <form onSubmit={handleSubmit((formData => {
            setSubmitting(true);
            loginUser(formData);
            setSubmitting(false);
        }))}>

            <div>Sign In</div>

            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    defaultValue="joedirt11"
                    ref={register({ required: "This is a required field" })} />
                { errors.username ? <p>{errors.username.message}</p> : null }
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    defaultValue="Testp@ss1"
                    ref={register({ required: "This is a required field" })} />
                { errors.password ? <p>{errors.password.message}</p> : null }
            </div>

            <button type="submit" disabled={submitting}>Sign In</button>
            <div>
                Don't have an account? 
                <Link to="/register">
                    Sign up here!
                </Link>
            </div>
        </form>
    )
}

export default SignIn;