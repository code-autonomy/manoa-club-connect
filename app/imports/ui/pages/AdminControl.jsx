import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Col, Container, Row, Popover, OverlayTrigger } from 'react-bootstrap';
import { PlusCircle } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
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
  const addClubPopover = (
    <Popover id="popover-positioned-left" title="Popover left" className="p-2 text-center">
      <strong><h6>Add Club</h6></strong>
    </Popover>
  );
  return (ready ? (
    <Container fluid className="ps-3 mb-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <Row className="pt-3 mb-3">
            <Col />
            <Col className="text-center">
              <h2>Current Active Clubs</h2>
            </Col>
            <Col className="ms-auto text-end" style={{ fontSize: '1.5rem' }}>
              <OverlayTrigger trigger="hover" placement="left" overlay={addClubPopover}>
                <Link to="/add"><PlusCircle style={{ color: 'black' }} /></Link>
              </OverlayTrigger>
            </Col>
          </Row>
          <Row xs={1} md={2} lg={3}>
            {clubs.map((club) => (<Col key={club._id} className="mb-3"><ClubItemAdmin club={club} /></Col>))}
          </Row>
        </Col>
        <Col
          className="container-fluid text-center me-0 pt-3"
          style={{ borderLeft: '1px solid black', borderBottom: '1px solid black', backgroundColor: 'lightgray' }}
        >
          <h3>Scrollable Element</h3>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default AdminControl;
