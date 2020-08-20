import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser } from '../../Redux/actions/signin_actions';

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
                    ref={register({ required: "This is a required field" })} />
                { errors.username ? <p>{errors.username.message}</p> : null }
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    ref={register({ required: "This is a required field" })} />
                { errors.password ? <p>{errors.password.message}</p> : null }
            </div>

            <button type="submit" disabled={submitting}>Sign In</button>
        </form>
    )
}

const mstp = () => {
    return {};
};
  
export default connect(mstp, { loginUser })(SignIn);