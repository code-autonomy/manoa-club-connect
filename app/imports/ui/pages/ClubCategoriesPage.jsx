import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Import Bootstrap components
import { NavLink } from 'react-router-dom'; // Import NavLink

const ClubsCategoriesPage = () => {
  // Define categories of clubs
  const categories = [
    { id: 1, name: 'Sports', description: 'Join sports clubs and teams for various activities.' },
    { id: 2, name: 'Arts & Crafts', description: 'Express your creativity with arts and crafts clubs.' },
    { id: 3, name: 'Academic', description: 'Explore academic interests with clubs related to various fields.' },
    { id: 4, name: 'Social', description: 'Connect with others through social clubs and events.' },
    // Add more categories as needed
  ];

  return (
    <Container id="categories">
      <h2 className="mt-4 mb-4">Club Categories</h2>
      <Row>
        {categories.map(category => (
          <Col key={category.id} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
                <Card.Text>{category.description}</Card.Text>
                <NavLink to={`/clubs/${category.id}`} className="btn btn-primary">
                  Explore {category.name} Clubs
                </NavLink>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ClubsCategoriesPage;
