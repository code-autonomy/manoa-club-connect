import React from 'react';
import { Col, Container, Row, Carousel, CarouselItem, Button, Image } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { PersonArmsUp } from 'react-bootstrap-icons';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

/* A simple static component to render a carousel for the landing page. */
const Landing = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  return (
    <Container id="landing-page" fluid className="landing-background py-4 m-0" style={{ padding: '0' }}>
      <Carousel indicators={false}>
        <CarouselItem id="slide-1">
          {currentUser === '' ? (
            <Container className="carousel-item-container text-center py-3" style={{ width: '70%' }}>
              <>
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
                    <Button className="btn-sign" id="login-button-sign-in" as={NavLink} to="/signin">Sign In</Button>
                  </Col>
                  <Col>
                    <h3>Don&apos;t Have An Account?</h3>
                    <Button className="btn-sign" id="login-button-sign-up" as={NavLink} to="/signup">Sign Up</Button>
                  </Col>
                </Row>
              </>
            </Container>
          ) : (
            <Container className="carousel-item-container text-center py-3" style={{ width: '70%' }}>
              <Row className="mt-5">
                <h1>Welcome Back!</h1>
                <h4 className="mt-3">What&apos;re You Up To Now?</h4>
              </Row>
              <Row className="m-3" style={{ borderTop: 'black solid 1px' }}>
                <Col className="gradient-up-blue" style={{ borderLeft: 'black solid 1px', height: '17rem' }}>
                  <Link
                    id="user-profile-nav"
                    to="/UserProfile"
                    role="button"
                    className="signin-text btn btn-outline-dark btn-lg"
                    key="UserProfile"
                  >
                    User Profile
                  </Link>
                </Col>
                <Col className="gradient-up-green" style={{ borderRight: 'black solid 1px', borderLeft: 'black solid 1px' }}>
                  <Link
                    id="clubs-nav"
                    to="/ClubCategoriesPage"
                    role="button"
                    className="signin-text btn btn-outline-dark btn-lg"
                  >
                    Explore Clubs
                  </Link>
                </Col>
                <Col className="gradient-up-blue" style={{ borderRight: 'black solid 1px' }}>
                  <Link
                    id="navbar-sign-out"
                    to="/signout"
                    role="button"
                    className="signin-text btn btn-outline-dark btn-lg"
                  >
                    Ready to Leave?
                  </Link>
                </Col>
              </Row>
            </Container>
          )}
        </CarouselItem>
        <CarouselItem id="slide-2">
          <Container className="carousel-item-container text-center py-3" style={{ width: '70%' }}>
            <Row className="mt-5">
              <Col />
              <Col xs={6}>
                <h1>Have an Idea for a Club?</h1>
                <hr className="underline" />
              </Col>
              <Col />
            </Row>
            <Row className="m-4 text-start">
              <Col xs={8}>
                <h5>
                  The University of Hawai&apos;i at Manoa encourages students to enhance their educational involvement
                  by providing the means to form their own Registered Independent Organizations (RIO). If you have your
                  own idea for a club, association, or organization, feel free to start the
                  process <a href="https://manoa.hawaii.edu/studentlife/involvement/registered-independent-organizations/" style={{ color: 'darkgreen' }} target="_blank" rel="noreferrer">here.</a>
                </h5>
                <hr />
              </Col>
              <Col className="text-center">
                <Image
                  src="https://bloximages.newyork1.vip.townnews.com/manoanow.org/content/tncms/assets/v3/editorial/0/fe/0fe5a306-021b-11e8-870c-c3f45737376c/5a6a544d2fbe6.image.png"
                  className="image-circle"
                  alt="club-connect"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <h5>Don&apos;t forget to reach out to us if you create a new RIO, so you can get you&apos;re club on the site!</h5>
              <PersonArmsUp className="mt-4 icon-green" />
            </Row>
          </Container>
        </CarouselItem>
        <CarouselItem id="slide-3">
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
                <Col className="align-content-start">
                  <Image
                    src="https://static.wixstatic.com/media/458c98_34a33f66ed444e518016696ddb020dba.png/v1/fill/w_500,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/458c98_34a33f66ed444e518016696ddb020dba.png"
                    width="110px"
                    alt="club-example-1"
                  />
                </Col>
                <Col>
                  <Image
                    src="https://manoascholarsclub.weebly.com/uploads/1/3/0/5/130578933/1_8.png"
                    width="120px"
                    alt="club-example-4"
                  />
                </Col>
                <Col>
                  <Image
                    src="https://bloximages.newyork1.vip.townnews.com/manoanow.org/content/tncms/assets/v3/editorial/0/fe/0fe5a306-021b-11e8-870c-c3f45737376c/5a6a544d2fbe6.image.png"
                    width="130px"
                    style={{ borderRadius: 50 }}
                    alt="club-example-2"
                  />
                </Col>
                <Col>
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-iMgrfv3YYlzHGiWyLuCAEyfXBl62Xx3SKiGBJXo3fg&s"
                    width="120px"
                    style={{ borderRadius: 50 }}
                    alt="club-example-5"
                  />
                </Col>
                <Col>
                  <Image src="https://media.licdn.com/dms/image/C4E03AQFwgX3EJjCSIw/profile-displayphoto-shrink_800_800/0/1597953578265?e=2147483647&v=beta&t=70G4df4ckKXvuKaoOb1C25q3UwnAJw4jjP8BVGnB-II" width="110px" alt="club-example-3" />
                </Col>
              </Row>
              <h4 className="mt-4">Learn more about the different clubs, what they do, and how you can join!</h4>
            </Row>
          </Container>
        </CarouselItem>
      </Carousel>
    </Container>
  );
};

export default Landing;
