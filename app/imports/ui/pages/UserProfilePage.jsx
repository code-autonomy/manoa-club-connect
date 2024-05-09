import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Button, Card } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';
import { Users } from '../../api/Users/User';
import UserProfile from '../components/User';
import LoadingSpinner from '../components/LoadingSpinner';

const UserProfilePage = () => {
  const navigate = useNavigate();
  const goToEditUserPage = (userId) => navigate(`/edituser/${userId}`);

  const { ready, users } = useTracker(() => {
    const subscription = Meteor.subscribe(Users.userPublicationName);
    const rdy = subscription.ready();
    const userProfiles = Users.collection.find({}).fetch();
    return {
      users: userProfiles,
      ready: rdy,
    };
  }, []);

  const currentUser = users.length > 0 ? users[0] : null;
  const currentUserFirstName = currentUser ? currentUser.firstName : '';

  return (
    <div className="bg-lighter min-vh-100">
      {ready ? (
        <Container fluid className="d-flex justify-content-center align-items-center py-5">
          <Row className="justify-content-center">
            <Col md={6}>
              <Col fluid md={{ span: 8, offset: 2 }} className="text-center">
                <h2>Hi, {currentUserFirstName}</h2>
              </Col>
              {users.map((user) => (
                <div key={user._id} className="user-profile mt-4">
                  <Card className="border border-dark rounded shadow">
                    <Card.Body>
                      <UserProfile user={user} />
                    </Card.Body>
                  </Card>
                </div>
              ))}
              <Col fluid md={{ span: 8, offset: 2 }} className="text-center mt-4">
                <Button
                  id="edit-profile-button"
                  size="lg"
                  block
                  className="custom-review-button"
                  onClick={() => goToEditUserPage(currentUser._id)}
                  variant="success"
                >
                  Edit Your Profile Page
                </Button>
              </Col>
            </Col>
          </Row>
        </Container>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default UserProfilePage;
