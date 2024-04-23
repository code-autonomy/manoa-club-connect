import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row } from 'react-bootstrap';
import { Clubs } from '../../api/stuff/Club';
import ClubItemAdmin from '../components/ClubItemAdmin';
import LoadingSpinner from '../components/LoadingSpinner';

/* Renders a table containing all of the Stuff documents. Use <StuffItemAdmin> to render each row. */
const AdminControl = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { clubs, ready } = useTracker(() => {
    // Get access to Stuff documents.
    const subscription = Meteor.subscribe(Clubs.superAdminPublicationName);
    // Determine if the subscription is ready
    const rdy = subscription.ready();
    // Get the Stuff documents
    const items = Clubs.collection.find({}).fetch();
    return {
      clubs: items,
      ready: rdy,
    };
  }, []);
  return (ready ? (
    <Container fluid className="ps-3 pt-3">
      <Row className="justify-content-center">
        <Col md={7}>
          <Col className="text-center"><h2>Current Active Clubs</h2></Col>
          {clubs.map((club) => (<Col key={club._id}><ClubItemAdmin club={club} /></Col>))}
        </Col>
        <Col className="container-fluid text-center me-0">
          <h3>Scrollable Element</h3>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default AdminControl;
