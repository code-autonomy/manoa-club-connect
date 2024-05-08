import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';
import { Users } from '../../api/Users/User';
import UserInfo from '../components/UserInfo';
import LoadingSpinner from '../components/LoadingSpinner';

const UserPage = () => {
  const navigate = useNavigate();
  const goToEditUserPage = (userId) => navigate(`/edituser/${userId}`);
  const goToLeaveReview = () => navigate('/restaurants-list');

  const goAddRestaurant = () => navigate('/add-restaurant');

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
  const isVendor = currentUser && currentUser.title === 'Vendor';

  return (ready ? (
    <Container fluid id="view-user-page" className="min-vh-100">
      <Row>
        <Col md={6}>
          <Col fluid md={{ span: 4, offset: 3 }} className="text-center">
            <h2>Hi, {currentUserFirstName}</h2>
          </Col>
          {users.map((user) => (
            <UserInfo key={user._id} user={user} />
          ))}
          <Col fluid md={{ span: 4, offset: 3 }} className="d-flex justify-content-center">
            <Button id="edit-profile-button" size="lg" block className="text-center mt-3 custom-review-button" onClick={() => goToEditUserPage(currentUser._id)}>
              Edit Your Profile
            </Button>
          </Col>
        </Col>
        <Col md={6}>
          {isVendor && (
            <Col fluid className="text-center py-5">
              <h2>Want To Add A New Restaurant?</h2>
              <Button size="lg" block className="text-center mt-3 custom-review-button" onClick={goAddRestaurant}>
                Add A New Restaurant
              </Button>
            </Col>
          )}
          <Col className="text-center py-4">
            <h2>Clubs</h2>
            <Button size="lg" block className="text-center mt-3 custom-review-button" onClick={goToLeaveReview}>
              Club 1
            </Button>
          </Col>
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />);
};

export default UserPage;
