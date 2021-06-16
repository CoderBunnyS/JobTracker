import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = (props) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>
                Log In/Sign up
            </button>
        )
    );
}

export default LoginButton;