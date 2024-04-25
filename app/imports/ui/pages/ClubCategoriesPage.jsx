import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { Clubs } from '../../api/club/Club';
import { ClubCards } from '../components/ClubCards';
import LoadingSpinner from '../components/LoadingSpinner';

const ClubCategoriesPage = () => {
  const { clubs, ready } = useTracker(() => {
    const subscription = Meteor.subscribe('clubs');
    const rdy = subscription.ready();
    const items = Clubs.collection.find({}).fetch();
    return {
      clubs: items,
      ready: rdy,
    };
  });

  // Function to group clubs by category
  const groupClubsByCategory = (clubsGroup) => {
    const groupedClubs = {};
    clubsGroup.forEach((club) => {
      const { type } = club;
      if (!groupedClubs[type]) {
        groupedClubs[type] = [];
      }
      groupedClubs[type].push(club);
    });
    return groupedClubs;
  };

  return ready ? (
    <Container fluid className="ps-3 mb-5">
      <Row className="justify-content-center"> {/* Center align the title with the entire page */}
        <h2 className="text-center">Current Active Clubs</h2>
        <Col md={10}>
          {/* Group clubs by category and render a carousel for each category */}
          {Object.entries(groupClubsByCategory(clubs)).map(([category, clubsInCategory]) => (
            <div key={category} className="mb-4">
              <h3 className="mb-3">{category}</h3>
              <div style={{ overflow: 'hidden' }}> {/* Add overflow hidden to contain carousel */}
                <Carousel
                  nextIcon={<span className="carousel-arrow">›</span>}
                  prevIcon={<span className="carousel-arrow">‹</span>}
                  nextLabel=""
                  prevLabel="" // Hide default aria-labels
                >
                  {clubsInCategory.map((club, index) => (
                    // Render multiple cards within each Carousel.Item
                    index % 3 === 0 && (
                      <Carousel.Item key={`${category}-${index}`}>
                        <Row>
                          {/* eslint-disable-next-line no-shadow */}
                          {clubsInCategory.slice(index, index + 3).map((club) => (
                            <Col key={club._id} sm={4}>
                              <ClubCards clubs={[club]} />
                            </Col>
                          ))}
                        </Row>
                      </Carousel.Item>
                    )
                  ))}
                </Carousel>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  ) : <LoadingSpinner />;
};

export default ClubCategoriesPage;
