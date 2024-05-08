import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, Navigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import { Alert, Card, Col, Container, Row } from 'react-bootstrap';
import SimpleSchema from 'simpl-schema';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { AutoForm, ErrorsField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Users } from '../../api/Users/User';

/**
 * SignUp component is similar to signin component, but we create a new user instead.
 */
const SignUp = ({ location }) => {
  const [error, setError] = useState('');
  const [redirectToReferer, setRedirectToRef] = useState(false);

  const schema = new SimpleSchema({
    email: String,
    password: String,
    firstName: { type: String, optional: true },
    lastName: { type: String, optional: true },
    picture: { type: String, optional: true },
    interests: {
      type: Array,
      optional: true,
      defaultValue: [],
    },
    'interests.$': {
      type: String,
      allowedValues: ['Academic/Professional', 'Political', 'Sports/Leisure', 'Religious/Spiritual', 'Service', 'Fraternity/Sorority', 'Ethnic/Cultural', 'Honorary Society', 'Leisure/Recreational', 'Other'],
    },
    clubNames: {
      type: Array,
      optional: true,
      defaultValue: [],
    },
    'clubNames.$': {
      type: String,
    },
  });
  const bridge = new SimpleSchema2Bridge(schema);

  /* Handle SignUp submission. Create user account and a profile entry, then redirect to the home page. */
  const submit = (doc) => {
    const { email, password, firstName, lastName } = doc;
    Accounts.createUser({ email, username: email, password }, (err) => {
      if (err) {
        setError(err.reason);
      } else {
        Users.collection.insert({ email, firstName, lastName }, (errU) => {
          if (errU) {
            setError(errU.reason);
          } else {
            setError('');
            setRedirectToRef(true);
          }
        });
      }
    });
  };

  /* Display the signup form. Redirect to add page after successful registration and login. */
  const { home } = location?.state || { home: { pathname: '/home' } };
  // if correct authentication, redirect to from: page instead of signup screen
  if (redirectToReferer) {
    return <Navigate to={home} />;
  }
  return (
    <Container fluid id="signup-page" className="py-3 conic-bg">
      <Row className="justify-content-center">
        <Col xs={5} className="text-center py-3">
          <AutoForm schema={bridge} onSubmit={data => submit(data)}>
            <Card className="card-login mx-auto mt-5 py-3">
              <Card.Body>
                <h1 className="mb-3">Sign Up</h1>
                <TextField name="email" placeholder="UH E-mail address" className="text-start" />
                <TextField name="password" placeholder="Password" type="password" className="text-start" />
                <ErrorsField />
                <SubmitField id="signin-form-submit" />
                <hr />
                <span>
                  <h6>Already Have An Account?
                    {' '}
                    <Link to="/signin" style={{ color: 'darkgreen' }}>Sign In</Link>
                  </h6>
                </span>
              </Card.Body>
            </Card>
          </AutoForm>
          {error === '' ? (
            ''
          ) : (
            <Alert id="signin-alert" variant="danger" className="mx-auto mt-5">
              <Alert.Heading>Registration was not successful</Alert.Heading>
              {error}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

/* Ensure that the React Router location object is available in case we need to redirect. */
SignUp.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
};

SignUp.defaultProps = {
  location: { state: '' },
};

export default SignUp;
