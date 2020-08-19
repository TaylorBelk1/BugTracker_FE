import React from "react";
import { useForm } from "react-hook-form";

interface IFormData {
    username: string;
    password: string;
    first_name: string;
    last_name: string;
    email: string;
};

export default function SignUp() {
    const { register, handleSubmit, errors } = useForm<IFormData>();

    return (
        <form onSubmit={handleSubmit((formData => {
            console.log("Form Data: ", formData);
        }))}>
            <div>Sign Up</div>

            <div>
                <label htmlFor="first_name">First Name</label>
                <input 
                    type="text"
                    name="first_name"
                    id="first_name"
                    ref={register({ required: true })} />
                {
                    errors.first_name
                    && (<p>This is a required field.</p>)
                }
            </div>

            <div>
                <label htmlFor="last_name">Last Name</label>
                <input 
                    type="text"
                    name="last_name"
                    id="last_name"
                    ref={register({ required: true })} />
                {
                    errors.last_name
                    && (<p>This is a required field.</p>)
                }
            </div>

            <div>
                <label htmlFor="email">Email Address</label>
                <input 
                    type="email"
                    name="email"
                    id="email"
                    ref={register({ required: true })} />
                {
                    errors.email
                    && (<p>This is a required field.</p>)
                }
            </div>

            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    name="username"
                    id="username"
                    ref={register({ required: true, minLength: 5 })} />
                {
                    errors.username
                    && errors.username.type === "required"
                    && (<p>This is a required field.</p>)
                }
                {
                    errors.username
                    && errors.username.type === "minLength"
                    && (<p>Username must be at least 5 characters long.</p>)
                }
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name="password"
                    id="password"
                    ref={register({ required: true, minLength: 8 })} />
                {
                    errors.password
                    && errors.password.type === "required"
                    && (<p>This is a required field.</p>)
                }
                {
                    errors.password
                    && errors.password.type === "minLength"
                    && (<p>Do you want to get hacked? Cause that's how you get hacked... password should be at least 8 characters</p>)
                }
            </div>

            <button type="submit">Sign Up</button>

        </form>
    )
}