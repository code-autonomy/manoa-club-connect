// Members.jsx

import React from 'react';
import { Card, Button, ListGroup, Form } from 'react-bootstrap';
import { Members } from '../../api/Admin/Admin';

const MembersComponent = () => {
  const handleAddMember = () => {
    const newMemberName = 'New Member'; // Get the new member name from a form input
    const newMemberEmail = 'newmember@example.com'; // Get the new member email from a form input
    Members.insert({ name: newMemberName, email: newMemberEmail });
  };

  return (
    <Card>
      <Card.Header>Members</Card.Header>
      <Card.Body>
        <ListGroup>
          {/* Display list of members */}
          {Members.find().fetch().map((member) => (
            <ListGroup.Item key={member._id}>
              {member.name} - {member.email}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Form.Group controlId="newMember">
          <Form.Label>Add New Member:</Form.Label>
          <Form.Control type="text" placeholder="Enter member name" />
          <Form.Control type="email" placeholder="Enter member email" />
        </Form.Group>
        <Button variant="primary" onClick={handleAddMember}>
          Add Member
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MembersComponent;
