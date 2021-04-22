import React from "react";
import { useSignUpForm } from "../../context/SignupContext";
import { Animator } from "./Animator";

const ReviewForm = () => {
    const { social, profile } = useSignUpForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("You are Submitting")
    }


    return (
        <Animator>
            <form onSubmit={handleSubmit}>

                <h2>Review all you information</h2>
                <p><strong>Name:</strong>{profile.name}</p>
                <p><strong>Email:</strong>{profile.email}</p>
                <p><strong>Facebook:</strong>{social.facebook}</p>
                <p><strong>Twitter:</strong>{social.twitter}</p>

            I am the ReviewForm
            <input type="submit" value="Submit" />

            </form>
        </Animator>
    )
}
export { ReviewForm };