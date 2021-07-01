import React from 'react';
import Button from 'react-bootstrap/Button';

import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = (props) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <Button onClick={() => loginWithRedirect()}>
                Sign In
            </Button>
        )
    );
}

export default LoginButton;
