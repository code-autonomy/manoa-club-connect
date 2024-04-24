import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import { Clubs } from '../../api/club/Club.js';

/* Renders the RemoveClubPage for deleting a club document. */
const RemoveClubPage = () => {

  // Function to handle club deletion.
  const removeClub = (clubId) => {
    Clubs.collection.remove(clubId, (error) => {
      if (error) {
        swal('Error', error.message, 'error');
      } else {
        swal('Success', 'Club removed successfully', 'success');
      }
    });
  };

  // Render the club list with remove buttons.
  const renderClubList = () => {
    const clubs = Clubs.collection.find().fetch();
    return clubs.map((club) => (
      <Card key={club._id} className="my-2">
        <Card.Body>
          <Row>
            <Col xs={10}>
              <h5>{club.organization}</h5>
              <p>{club.type}</p>
              <p>{club.purpose}</p>
            </Col>
            <Col xs={2} className="d-flex align-items-center justify-content-end">
              <Button variant="danger" onClick={() => removeClub(club._id)}>Remove</Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    ));
  };

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={8}>
          <Col className="text-center"><h2>Remove Club</h2></Col>
          {renderClubList()}
        </Col>
      </Row>
    </Container>
  );
};

export default RemoveClubPage;
