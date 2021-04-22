import React from "react";
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"
import { useSignUpForm } from "../../context/SignupContext";
import { Animator } from "./Animator";

const SocialForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { social, setSocial } = useSignUpForm();

    const history = useHistory();
    const onSubmit = (data) => {

        history.push("/review")
        setSocial(data);

    }
    return (

        <Animator>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <h2>How can we find you?</h2>
                <input {...register('twitter', { required: true })}
                    type="text"
                    name="twitter"
                    placeholder="What's your twitter?"
                    defaultValue={social.twitter}


                />

                <p>{errors.twitter && 'Twitter is required'}</p>
                <input {...register('facebook', { required: true })}
                    name="facebook"
                    type="text"
                    defaultValue={social.facebook}

                    placeholder="Enter your Facebook"

                />
                <p>{errors.facebook && 'Facebook is required'}</p>

                <input type="submit" value="Next" />
            </form>
        </Animator>
    )
};
export { SocialForm };