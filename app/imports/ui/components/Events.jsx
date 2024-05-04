// Events.jsx

import React from 'react';
import { Card, Button, ListGroup, Form } from 'react-bootstrap';
import { Events } from '../../api/Admin/Admin';

const EventsComponent = () => {
  const handleAddEvent = () => {
    const newEventName = 'New Event'; // Get the new event name from a form input
    const newEventDate = new Date(); // Get the new event date from a form input
    Events.insert({ name: newEventName, date: newEventDate });
  };

  return (
    <Card>
      <Card.Header>Events</Card.Header>
      <Card.Body>
        <ListGroup>
          {/* Display list of events */}
          {Events.find().fetch().map((event) => (
            <ListGroup.Item key={event._id}>
              {event.name} - {event.date.toString()}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <Form.Group controlId="newEvent">
          <Form.Label>Add New Event:</Form.Label>
          <Form.Control type="text" placeholder="Enter event name" />
          <Form.Control type="date" />
        </Form.Group>
        <Button variant="primary" onClick={handleAddEvent}>
          Add Event
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EventsComponent;
