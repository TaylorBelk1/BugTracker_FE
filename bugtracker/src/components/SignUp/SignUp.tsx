import React, { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser } from '../../Redux/actions/signin_actions';

interface IFormData {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
};

function SignUp() {
    const { register, handleSubmit, errors } = useForm<IFormData>();

    const [submitting, setSubmitting] = useState<boolean>(false);

    return (
        <form onSubmit={handleSubmit((formData => {
            setSubmitting(true);
            registerUser(formData)
            setSubmitting(false);
        }))}>

            <div>Sign Up</div>

            {/* first_name */}
            <div>
                <label htmlFor="first_name">First Name</label>
                <input 
                    type="text"
                    name="first_name"
                    id="first_name"
                    ref={register({ required: "This is a required field" })} />
                { errors.last_name ? <p>{errors.last_name.message}</p> : null }
            </div>

            {/* last_name */}
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input 
                    type="text"
                    name="last_name"
                    id="last_name"
                    ref={register({ required: "This is a required field" })} />
                { errors.last_name ? <p>{errors.last_name.message}</p> : null }
            </div>

            {/* email */}
            <div>
                <label htmlFor="email">Email Address</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    ref={register({ required: "This is a required field" })} />
                { errors.email ? <p>{errors.email.message}</p> : null }
            </div>

            {/* username */}
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    name="username"
                    id="username"
                    ref={register({ 
                        required: "This is a required field", 
                        minLength: {
                            value: 5,
                            message: "Username should be at least 5 characters long."
                        }})} />
                { errors.username ? <p>{errors.username.message}</p> : null }
            </div>

            {/* password */}
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    id="password"
                    ref={register({
                        required: "This is a required field",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters long"
                        },
                        validate: (value) => {
                            return (
                                [/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every(pattern =>
                                    pattern.test(value)
                                ) || "Password must contain: uppercase, lowercase, number, symbol"
                            )
                        }
                    })} />
                { errors.password ? <p>{errors.password.message}</p> : null }
            </div>

            <button type="submit" disabled={submitting}>Sign Up</button>
        </form>
    )
}

const mstp = () => {
    return {};
};
  
export default connect(mstp, { registerUser })(SignUp);