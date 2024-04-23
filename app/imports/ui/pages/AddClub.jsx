import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../api/stuff/Club';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  organization: String,
  dateApproved: String,
  expiration: String,
  clubType: {
    type: String,
    allowedValues: ['Sports', 'Arts & Crafts', 'Academic', 'Social', 'Service'],
  },
  clubEmail: String,
  purpose: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddClub page for adding a document. */
const AddClub = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { organization, dateApproved, expiration, clubType, clubEmail, purpose } = data;
    const owner = Meteor.user().username;
    Clubs.collection.insert(
      { organization, dateApproved, expiration, clubType, clubEmail, purpose, owner },
      (error) => {
        if (error) {
          swal('Error', error.message, 'error');
        } else {
          swal('Success', 'Item added successfully', 'success');
          formRef.reset();
        }
      },
    );
  };

  // Render the form. Use Uniforms: https://github.com/vazco/uniforms
  let fRef = null;
  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Add Club</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField name="organization" />
                <TextField name="dateApproved" />
                <TextField name="expiration" />
                <SelectField name="clubType" placeholder="Choose Club Type" />
                <TextField name="clubEmail" />
                <LongTextField name="purpose" maxLength={50} />
                <SubmitField value="submit" />
                <ErrorsField />
              </Card.Body>
            </Card>
          </AutoForm>
        </Col>
      </Row>
    </Container>
  );
};

export default AddClub;
