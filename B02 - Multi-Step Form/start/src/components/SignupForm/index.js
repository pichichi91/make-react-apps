import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { ProfileForm } from "./ProfileForm";
import { ReviewForm } from "./Review";
import { SignupLinks } from "./SignupLinks";
import { SocialForm } from "./SocialForm";
import { SignupFormProvider } from "../../context/SignupContext";
import { AnimatePresence } from "framer-motion"

const SignupForm = () => {
    const location = useLocation();
    return (
        <div className="signup-form">
            <SignupFormProvider>


                <SignupLinks />
                <AnimatePresence >
                    <Switch location={location} key={location.pathname}>
                        <Route path="/" exact component={ProfileForm} />
                        <Route path="/social" exact component={SocialForm} />
                        <Route path="/review" exact component={ReviewForm} />

                    </Switch>
                </AnimatePresence>

            </SignupFormProvider>


        </div>
    )
}
export { SignupForm };