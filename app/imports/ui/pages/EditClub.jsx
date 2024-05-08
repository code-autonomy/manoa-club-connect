import React from 'react';
import swal from 'sweetalert';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router';
import { Clubs } from '../../api/club/Club';
import LoadingSpinner from '../components/LoadingSpinner';

const bridge = new SimpleSchema2Bridge(Clubs.schema);

const frameStyle = {
  display: 'flex',
  justifyContent: 'center',
  height: '100vh', // Set height to 100% of viewport height
  backgroundColor: 'darkgreen',
  opacity: '50',
};

const mainCol = {
  display: 'flex',
  justifyContent: 'center',
  height: '75vh',
};

const sideInfo = {
  display: 'flex',
  justifyContent: 'center',
  height: '75vh',
};

const containerStyle = {
  border: '2px solid #ccc', // Add border around the container
  borderRadius: '10px', // Add border-radius for rounded corners
  margin: '10px',
  backgroundColor: 'white',
};

const cardMain = {
  width: '100%',
  height: '80%',
  boxShadow: '2px 5px 5px black',
  top: '10%',
  justifyContent: 'center',
};

const cardInfo = {
  width: '100%',
  height: '80%',
  boxShadow: '2px 5px 5px black',
  top: '10%',
  backgroundColor: 'whitesmoke',
};

const submitFieldStyle = {
  position: 'absolute',
  left: '50%', // Place it in the center horizontally
  backgroundColor: 'darkgreen',
};

/* Renders the EditClub page for editing a single document. */
const EditClub = () => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const { _id } = useParams();
  // console.log('EditClub', _id);
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { doc, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Clubs.adminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the document
    const document = Clubs.collection.findOne(_id);
    return {
      doc: document,
      ready: rdy,
    };
  }, [_id]);
  // console.log('EditClub', doc, ready);
  // On successful submit, insert the data.
  const submit = (data) => {
    const { organization, dateApproved, expiration, type, email, purpose } = data;
    Clubs.collection.update(_id, { $set: { organization, dateApproved, expiration, type, email, purpose } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Club updated successfully', 'success')));
  };

  return ready ? (
    <div id="edit-club-page" style={frameStyle}>
      <Container fluid style={containerStyle}>
        <Container fluid className="text-center">
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={doc}>
            <Row className="">
              <Col style={mainCol}>
                <Card style={cardMain}>
                  <TextField id="edit-org" name="organization" />
                  <TextField id="edit-approval" name="dateApproved" />
                  <TextField id="edit-expiration" name="expiration" />
                  <TextField id="edit-email" name="email" />
                </Card>
              </Col>
              <Col style={sideInfo}>
                <Card style={cardInfo}>
                  <Card.Body>
                    <SelectField id="edit-type" name="type" />
                    <LongTextField id="edit-purpose" name="purpose" />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className={submitFieldStyle}>
              <SubmitField id="submit-edit" value="submit" />
              <ErrorsField />
            </div>
          </AutoForm>
        </Container>
      </Container>
    </div>
  ) : <LoadingSpinner />;
};

export default EditClub;
