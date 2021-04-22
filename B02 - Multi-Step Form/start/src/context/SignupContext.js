import React, { createContext, useContext, useState } from 'react';

const SignupContext = createContext();

export const useSignUpForm = () => useContext(SignupContext);

export const SignupFormProvider = ({ children }) => {

    const [profile, setProfile] = useState({})
    const [social, setSocial] = useState({})

    return (
        <SignupContext.Provider value={{ profile, setProfile, social, setSocial }}>
            {children}
        </SignupContext.Provider>
    )
}