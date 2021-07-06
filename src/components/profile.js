import React from "react";
import LogoutButton from './partials/LogoutButton.js'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} style={{borderRadius: '10px'}} />
        <h2>{user.nickname}</h2>
        <p>{user.email}</p>
        <LogoutButton />
      </div>
    )
  );
};

export default Profile;
