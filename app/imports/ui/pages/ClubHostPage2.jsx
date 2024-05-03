import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Image, Row, Modal, Form, Button } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { PencilSquare } from 'react-bootstrap-icons';
import swal from 'sweetalert';
import { useParams } from 'react-router';
import { AutoForm } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { Clubs } from '../../api/club/Club';
import LoadingSpinner from '../components/LoadingSpinner';

const frameStyle = {
  display: 'flex',
  justifyContent: 'center',
  height: '100vh', // Set height to 100% of viewport height
  backgroundColor: 'darkgreen',
  opacity: '50',
};

const mainCol = {
  justifyContent: 'left',
  height: '75vh',
};

const sideInfo = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '75vh',
};

const containerStyle = {
  border: '2px solid #ccc', // Add border around the container
  borderRadius: '10px', // Add border-radius for rounded corners
  margin: '10px',
  backgroundColor: 'white',
};

const cardInfo = {
  width: '100%',
  height: '100%',
  boxShadow: '2px 5px 5px black',
  top: '10%',
  backgroundColor: 'whitesmoke',
};

const defaultClubImage = '/images/defaultClubImage.jpg'; // Default profile image URL

const bridge = new SimpleSchema2Bridge(Clubs.schema);

const ClubHostPage1 = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user()?.emails[0]?.address, // Get the email address of the current user
  }), []);

  const { _id } = useParams();

  const { clubs, ready } = useTracker(() => {
    const subscription = Meteor.subscribe(Clubs.adminPublicationName);
    const rdy = subscription.ready();
    const items = Clubs.collection.find({}).fetch();
    return {
      clubs: items,
      ready: rdy,
    };
  });

  const [showEditModal, setShowEditModal] = useState(false); // State to control the edit modal visibility
  const [editedClub, setEditedClub] = useState(null); // State to hold the edited club data

  const userClub = clubs.find(club => club.email === currentUser);

  const handleEdit = () => {
    setEditedClub(userClub); // Initialize editedClub state with current club data
    setShowEditModal(true); // Show the edit modal
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false); // Close the edit modal
  };

  const handleInputChange = (field, value) => {
    // Update edited club data
    setEditedClub(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Save changes to database
    Clubs.collection.update(_id, { $set: editedClub }, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Club updated successfully', 'success');
        setShowEditModal(false); // Close the edit modal
      }
    });
  };

  const submit = (data) => {
    const { organization, dateApproved, expiration, type, image, email, purpose } = data;
    Clubs.collection.update(_id, { $set: { organization, dateApproved, expiration, type, image, email, purpose } }, (error) => (error ?
      swal('Error', error.message, 'error') :
      swal('Success', 'Club updated successfully', 'success')), setShowEditModal(false));
  };

  return ready ? (
    <div style={frameStyle}>
      <Container fluid style={containerStyle}>
        {userClub ? (
          <Container fluid className="text-center">
            <Row>
              <Col className="text-center mt-5" style={mainCol}>
                {/* Display other club information here */}
                <Image src={defaultClubImage} roundedCircle className="m-3" style={{ width: '250px', objectFit: 'fill' }} alt="clubImg" />
                <h3 className="mb-5"><strong>{userClub.organization}</strong></h3>
                <h5 className="m-4">Club Approval Date: {userClub.dateApproved}</h5>
                <h5 className="m-4">Club Renewal Date: {userClub.expiration}</h5>
                <h5 className="m-4">Contact Email: {userClub.email}</h5>
              </Col>
              <Col className="mt-3" style={sideInfo}>
                <Card style={cardInfo}>
                  <Card.Body>
                    <Card.Text className="m-3"><strong>What Kind of Club Is This?</strong></Card.Text>
                    <Card.Footer style={{ backgroundColor: 'white' }}>{userClub.type}</Card.Footer>
                    <Card.Text className="m-3"><strong>Club Purpose</strong></Card.Text>
                    <Card.Footer style={{ backgroundColor: 'white' }}>{userClub.purpose}</Card.Footer>
                  </Card.Body>
                  <Card.Footer className="text-end"><PencilSquare onClick={handleEdit} /></Card.Footer>
                </Card>
              </Col>
            </Row>
          </Container>
        ) : (
          <Col xs={7} className="text-center">
            <h1>This is not the club you are looking for...</h1>
          </Col>
        )}
      </Container>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleCloseEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Club Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AutoForm schema={bridge} onSubmit={data => submit(data)} model={clubs}>
            <Form.Group controlId="formOrganization">
              <Form.Label>Organization</Form.Label>
              <Form.Control type="text" defaultValue={editedClub?.organization} onChange={e => handleInputChange('organization', e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formPurpose">
              <Form.Label>Club Purpose</Form.Label>
              <Form.Control type="text" defaultValue={editedClub?.purpose} onChange={e => handleInputChange('purpose', e.target.value)} />
            </Form.Group>
            {/* Add other form fields for club information */}
          </AutoForm>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  ) : <LoadingSpinner />;
};

export default ClubHostPage1;
