import React from "react"
import { NavLink } from "react-router-dom"
import { useSignUpForm } from "../../context/SignupContext";

const isEmpty = (object) => {
    return Object.keys(object).length === 0;
}

const SignupLinks = () => {
    const { profile, social } = useSignUpForm();

    const isProfileDone = !isEmpty(profile);
    const isSocialDone = !isEmpty(social);


    return (
        <div className="step-links">
            <NavLink to="/" exact>
                {isProfileDone ? '❤️' : '🤍'} Profile <span />
            </NavLink>

            {isProfileDone ? (
                <NavLink to="/social">
                    {isSocialDone ? '❤️' : '🤍'} Social <span />
                </NavLink>
            ) : (
                <a>
                    Social <span />
                </a>
            )}

            {isProfileDone && isSocialDone ? (
                <NavLink to="/review" style={{ float: 'right' }}>
                    Review <span />
                </NavLink>
            ) : (
                <a style={{ float: 'right' }}>
                    Review <span />
                </a>
            )}
        </div>
    );

}
export { SignupLinks };