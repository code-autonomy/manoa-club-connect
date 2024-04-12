import React, { useEffect } from 'react';
import { Meteor } from 'meteor/meteor';
import { Col } from 'react-bootstrap';
import SignOutMessage from './SignOutMessage';

const SignOut = () => {
  // Perform sign-out logic
  Meteor.logout();

  useEffect(() => {
    // Redirect to the landing page after 3 seconds
    const timer = setTimeout(() => {
      window.location.href = '/'; // Redirect using window.location.href
    }, 3000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <Col id="signout-page" className="text-center py-3">
      <SignOutMessage />
    </Col>
  );
};

export default SignOut;
