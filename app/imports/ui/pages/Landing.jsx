import React from 'react';
import { Col, Container, Row, Carousel, CarouselItem, Button, Image } from 'react-bootstrap';

/* A simple static component to render a carousel for the landing page. */
const Landing = () => (
  <Container id="landing-page" fluid className="landing-background py-4 m-0" style={{ padding: '0' }}>
    <Carousel>
      <CarouselItem>
        <Container className="carousel-item-container text-center py-3" style={{ width: '70%' }}>
          <Row className="mt-5">
            <Col />
            <Col xs={8}>
              <h1>Connect With Clubs</h1>
              <hr className="underline" />
              <p style={{ fontSize: 20 }}>
                If You&apos;re A Student of the University of Hawai&apos;i, There Are Over 200 Clubs
                <h4><strong> For You!</strong></h4>
              </p>
            </Col>
            <Col />
          </Row>
          <Row className="mt-4">
            <Col>
              <h3>Connect Now!</h3>
              <Button>Sign In</Button>
            </Col>
            <Col>
              <h3>Don&apos;t Have An Account?</h3>
              <Button>Sign Up</Button>
            </Col>
          </Row>
        </Container>
      </CarouselItem>
      <CarouselItem>
        <Container className="carousel-item-container text-center py-3" style={{ width: '70%' }}>
          <Row className="mt-5">
            <Col />
            <Col xs={8}>
              <h1>Have an Idea for a Club?</h1>
              <hr className="underline" />
            </Col>
            <Col />
          </Row>
        </Container>
      </CarouselItem>
      <CarouselItem>
        <Container className="carousel-item-container text-center py-3" style={{ width: '70%' }}>
          <Row className="mt-5">
            <Col />
            <Col xs={8}>
              <h1>What is Manoa Club Connect?</h1>
              <hr className="underline" />
            </Col>
            <Col />
          </Row>
          <Row className="ms-4 me-4">
            <h4>The University of Hawai&apos;i is home to over<strong> 200</strong> registered and unregistered clubs.</h4>
            <h4>Manoa Club Connect provides an accessible portal to all the clubs available to you as a UH Student!</h4>
            <Row className="mt-3">
              <Col>
                <Image src="" alt="club-example-1" />
              </Col>
              <Col>
                <Image src="" alt="club-example-2" />
              </Col>
              <Col>
                <Image src="" alt="club-example-3" />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Image src="" alt="club-example-4" />
              </Col>
              <Col>
                <Image src="" alt="club-example-5" />
              </Col>
            </Row>
            <h4 className="mt-4">Learn more about the different clubs, what they do, and how you can join!</h4>
          </Row>
        </Container>
      </CarouselItem>
    </Carousel>
  </Container>
);

export default Landing;
