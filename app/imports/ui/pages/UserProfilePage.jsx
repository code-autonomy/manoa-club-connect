import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Button } from 'react-bootstrap';
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
  const userEmail = currentUser ? currentUser.email : '';
  console.log(userEmail);
  const currentUserFirstName = currentUser ? currentUser.firstName : '';

  return (ready ? (
    <Container fluid id="view-user-page" className="min-vh-100">
      <Row>
        <Col md={6}>
          <Col fluid md={{ span: 4, offset: 3 }} className="text-center">
            <h2>Hi, {currentUserFirstName}</h2>
          </Col>
          {users.map((user) => (
            <UserProfile key={user._id} user={user} />
          ))}
          <Col fluid md={{ span: 4, offset: 3 }} className="d-flex justify-content-center">
            <Button id="edit-profile-button" size="lg" block className="text-center mt-3 custom-review-button" onClick={() => goToEditUserPage(currentUser._id)}>
              Edit Your Profile Page
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default UserProfilePage;
