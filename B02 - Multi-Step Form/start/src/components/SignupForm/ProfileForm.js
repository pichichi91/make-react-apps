import React from "react";
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { useSignUpForm } from "../../context/SignupContext";
import { Animator } from "./Animator";

const ProfileForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const { profile, setProfile } = useSignUpForm();


    const onSubmit = (data) => {

        history.push("/social")
        setProfile(data);

    }
    return (
        <Animator>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2>Tell us about yourself</h2>
                <input {...register('name', { required: true })}
                    type="text"
                    name="name"
                    defaultValue={profile.name}
                    placeholder="Enter your name"

                />

                <p>{errors.name && 'Name is required'}</p>
                <input {...register('email', { required: true, pattern: /^(([^<>()\\\\.,;:\s@"]+(\.[^<>()[]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, })} type="email"
                    name="email"
                    defaultValue={profile.email}

                    placeholder="Enter your email"

                />
                <p>{errors.email && 'A valid Email is required'}</p>

                <input type="submit" value="Next" />
            </form>
        </Animator>
    )
}
export { ProfileForm };