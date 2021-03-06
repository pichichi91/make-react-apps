import React, { createContext, useState, useEffect, useContext } from 'react';
import createAuth0Client from '@auth0/auth0-spa-js';

export const Auth0Context = createContext();

export const useAuth0 = () => useContext(Auth0Context);

export function AuthProvider({ children }) {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [auth0Client, setAuth0Client] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        initAuth0();
        async function initAuth0() {

            const auth0 = await createAuth0Client({
                domain: "dev-u03raapc.eu.auth0.com",
                client_id: 'PiKCLxO5ZtUJ34XMQkqCeESzE5hY8nmt',
                redirect_uri: window.location.origin
            });
            setAuth0Client(auth0)


            if (window.location.search.includes("code=") && window.location.search.includes("state=")) {
                try {
                    await auth0.handleRedirectCallback();

                } catch (err) {
                    alert(err)
                }
                window.location.replace(window.location.pathname)

            }


            const isAuthenticated = await auth0.isAuthenticated()
            setIsAuthenticated(isAuthenticated)

            if (isAuthenticated) {
                const user = await auth0.getUser()
                setUser(user)
            }

            setIsLoading(false);

        }

    }, []);

    if (isLoading) return <div>Loading... </div>




    return <Auth0Context.Provider value={{
        isAuthenticated,
        user,
        isLoading,
        login: (...parameters) => auth0Client.loginWithRedirect(...parameters),
        logout: (...parameters) => auth0Client.logout(...parameters),
        getToken: (...parameters) => auth0Client.getTokenSilently(...parameters)

    }}>
        {children}
    </Auth0Context.Provider>


}