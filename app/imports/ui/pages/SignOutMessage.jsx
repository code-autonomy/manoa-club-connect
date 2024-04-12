import React, { useEffect } from 'react';

const SignOutMessage = () => {
  useEffect(() => {
    // Redirect to the landing page after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = '/'; // Redirect using window.location.href
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sign-out-message">
      <h2>You have signed out of your account.</h2>
      <p>Redirecting to the Homepage...</p>
    </div>
  );
};

export default SignOutMessage;
