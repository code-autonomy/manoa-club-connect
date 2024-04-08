import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Alert, Card, CardBody, Col, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';

/**
 * Signin page overrides the form’s submit event and call Meteor’s loginWithPassword().
 * Authentication errors modify the component’s state to be displayed
 */
const SignIn = () => {
  const [error, setError] = useState('');
  const [redirect, setRedirect] = useState(false);
  const schema = new SimpleSchema({
    email: String,
    password: String,
  });
  const bridge = new SimpleSchema2Bridge(schema);

  // Handle Signin submission using Meteor's account mechanism.
  const submit = (doc) => {
    // console.log('submit', doc, redirect);
    const { email, password } = doc;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        setRedirect(true);
      }
    });
    // console.log('submit2', email, password, error, redirect);
  };

  // Render the signin form.
  // console.log('render', error, redirect);
  // if correct authentication, redirect to page instead of login screen
  if (redirect) {
    return (<Navigate to="/" />);
  }
  // Otherwise return the Login form.
  return (
    <Row id="signin" fluid className="signin-bg">
      <Col className="sign-in-left text-center py-3">
        <h2>Use Your University Email to Login</h2>
      </Col>
      <Col className="text-center sign-in-right py-3">
        <Card className="card-login mx-auto mt-3 py-3">
          <CardBody>
            <h1 className="mb-3">Login</h1>
            <AutoForm schema={bridge} onSubmit={data => submit(data)}>
              <TextField id="signin-form-email" name="email" placeholder="Enter UH Email" className="text-start" />
              <TextField id="signin-form-password" name="password" placeholder="Enter Your Password" type="password" className="text-start" />
              <ErrorsField />
              <SubmitField id="signin-form-submit" />
              <Link to="/signup" style={{ color: 'darkgreen' }}>Don&apos;t Have An Account?</Link>
            </AutoForm>
          </CardBody>
        </Card>
        {error === '' ? (
          ''
        ) : (
          <Alert id="signin-alert" className="mx-auto my-auto" variant="danger">
            <Alert.Heading>Login Unsuccessful</Alert.Heading>
            {error}
          </Alert>
        )}
      </Col>
    </Row>
  );
};

export default SignIn;
