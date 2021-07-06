import React from 'react';
import Button from 'react-bootstrap/Button'
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = (props) => {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <Button
                onClick={() => logout({ returnTo: window.location.origin })}>
                Logout
            </Button>
        )
    );
}

export default LogoutButton;
