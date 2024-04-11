import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { PersonArmsUp } from 'react-bootstrap-icons';

const UserHomePage = () => (
  <Container fluid className="landing-background py-4 m-0" style={{ padding: '0' }}>
    <Row className="mt-5">
      <Col />
      <Col xs={8} className="text-center">
        <h1>Welcome to Your User Home Page</h1>
        <hr className="underline" />
      </Col>
      <Col />
    </Row>

    <Row className="mt-5">
      <Col xs={12} className="text-center">
        <h2>Connect With Clubs</h2>
        <p style={{ fontSize: 20 }}>
          If You are a Student of the University of Hawaii, There Are Over 200 Clubs
          <strong> For You!</strong>
        </p>
      </Col>
    </Row>

    <Row className="mt-4">
      <Col xs={6} className="text-center">
        <Button className="btn-sign" as={NavLink} to="/signin">Sign In</Button>
      </Col>
      <Col xs={6} className="text-center">
        <Button className="btn-sign" as={NavLink} to="/signup">Sign Up</Button>
      </Col>
    </Row>

    <Row className="mt-5">
      <Col xs={6} className="text-center">
        <h2>Have an Idea for a Club?</h2>
        <hr className="underline" />
      </Col>
      <Col xs={6} className="text-center">
        <Image
          src="https://bloximages.newyork1.vip.townnews.com/manoanow.org/content/tncms/assets/v3/editorial/0/fe/0fe5a306-021b-11e8-870c-c3f45737376c/5a6a544d2fbe6.image.png"
          className="image-circle"
          alt="club-connect"
        />
      </Col>
    </Row>

    <Row className="mt-5">
      <Col xs={12} className="text-center">
        <h2>What is Manoa Club Connect?</h2>
        <hr className="underline" />
        <h4>Manoa Club Connect provides an accessible portal to all the clubs available to you as a UH Student!</h4>
      </Col>
    </Row>

    <Row className="mt-3">
      <Col xs={12} className="text-center">
        <Image src="https://static.wixstatic.com/media/458c98_34a33f66ed444e518016696ddb020dba.png/v1/fill/w_500,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/458c98_34a33f66ed444e518016696ddb020dba.png" width="110px" alt="club-example-1" />
        <Image src="https://manoascholarsclub.weebly.com/uploads/1/3/0/5/130578933/1_8.png" width="120px" alt="club-example-4" />
        <Image src="https://bloximages.newyork1.vip.townnews.com/manoanow.org/content/tncms/assets/v3/editorial/0/fe/0fe5a306-021b-11e8-870c-c3f45737376c/5a6a544d2fbe6.image.png" width="130px" style={{ borderRadius: 50 }} alt="club-example-2" />
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-iMgrfv3YYlzHGiWyLuCAEyfXBl62Xx3SKiGBJXo3fg&s" width="120px" style={{ borderRadius: 50 }} alt="club-example-5" />
        <Image src="https://media.licdn.com/dms/image/C4E03AQFwgX3EJjCSIw/profile-displayphoto-shrink_800_800/0/1597953578265?e=2147483647&v=beta&t=70G4df4ckKXvuKaoOb1C25q3UwnAJw4jjP8BVGnB-II" width="110px" alt="club-example-3" />
      </Col>
    </Row>

    <Row className="mt-3">
      <Col xs={12} className="text-center">
        <h4>Learn more about the different clubs, what they do, and how you can join!</h4>
      </Col>
    </Row>

    <Row className="mt-5">
      <Col xs={12} className="text-center">
        <PersonArmsUp className="mt-4 icon-green" />
      </Col>
    </Row>
  </Container>
);

export default UserHomePage;
