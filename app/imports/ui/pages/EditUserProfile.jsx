import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField, HiddenField, SelectField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Users } from '../../api/Users/User';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Users.schema);

const EditUserPage = () => {
  const { _id } = useParams();

  const { doc, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Users.userPublicationName, _id);
    const rdy = subscription.ready();
    const document = Users.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);

  const submit = (data) => {
    const { firstName, lastName, title, picture, interests } = data; // Added interests
    Users.collection.update(_id, { $set: { firstName, lastName, title, picture, interests } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Item updated successfully', 'success')));
  };

  return ready ? (
    <Container id="edit-user-page" className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Edit Profile</h2>
          <AutoForm schema={bridge} model={doc} onSubmit={submit}>
            <Card>
              <Card.Body>
                <TextField name="firstName" placeholder="First Name" />
                <TextField name="lastName" placeholder="Last Name" />
                <TextField name="picture" placeholder="Picture URL" />
                <SelectField name="interests" placeholder="Interests" multiple />
                <div className="text-center">
                  <SubmitField id="update-profile-button" value="Update Profile" />
                </div>
                <ErrorsField />
                <HiddenField name="email" />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default EditUserPage;
