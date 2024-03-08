import { useState } from "react";

export const Loggedln = () => {
  const [isLoggedIn, setlsLoggedIn] = useState(false);
  const handleLogin = () => {
    setlsLoggedIn(true);
  };

  const handleLogout = () => {
    setlsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};
