// Announcements.jsx

import React from 'react';
import { Card, Button, ListGroup, Form } from 'react-bootstrap';
import { Announcements } from '../../api/Admin/Admin';

const AnnouncementsComponent = () => {
  const handleAddAnnouncement = () => {
    const newAnnouncementText = 'New Announcement'; // Get the new announcement text from a form input
    Announcements.insert({ text: newAnnouncementText });
  };

  return (
    <Card>
      <Card.Header>Announcements</Card.Header>
      <Card.Body>
        <ListGroup>
          {/* Display list of announcements */}
          {Announcements.find().fetch().map((announcement) => (
            <ListGroup.Item key={announcement._id}>
              {announcement.text}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Form.Group controlId="newAnnouncement">
          <Form.Label>Add New Announcement:</Form.Label>
          <Form.Control type="text" placeholder="Enter announcement text" />
        </Form.Group>
        <Button variant="primary" onClick={handleAddAnnouncement}>
          Add Announcement
        </Button>
      </Card.Body>
    </Card>
  );
};

export default AnnouncementsComponent;
