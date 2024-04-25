import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, LongTextField, SelectField, SubmitField, TextField } from 'uniforms-bootstrap5';
import swal from 'sweetalert';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import SimpleSchema from 'simpl-schema';
import { Meteor } from 'meteor/meteor';
import { Clubs } from '../../api/club/Club.js';

// Create a schema to specify the structure of the data to appear in the form.
const formSchema = new SimpleSchema({
  organization: String,
  dateApproved: String,
  expiration: String,
  type: {
    type: String,
    allowedValues: ['Academic/Professional', 'Political', 'Sports/Leisure', 'Religious/Spiritual', 'Service', 'Fraternity/Sorority', 'Ethnic/Cultural', 'Honorary Society', 'Leisure/Recreational', 'Other'],
    defaultValue: 'Other',
  },
  email: String,
  purpose: String,
});

const bridge = new SimpleSchema2Bridge(formSchema);

/* Renders the AddClub page for adding a document. */
const AddClub = () => {

  // On submit, insert the data.
  const submit = (data, formRef) => {
    const { organization, dateApproved, expiration, type, email, purpose } = data;
    const owner = Meteor.user().username;
    Clubs.collection.insert(
      { organization, dateApproved, expiration, type, email, purpose, owner },
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
    <Container id="add-club-page" className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center"><h2>Add Club</h2></Col>
          <AutoForm ref={ref => { fRef = ref; }} schema={bridge} onSubmit={data => submit(data, fRef)}>
            <Card>
              <Card.Body>
                <TextField id="add-org" name="organization" />
                <TextField id="add-date-approved" name="dateApproved" />
                <TextField id="add-expiration" name="expiration" />
                <SelectField id="add-type" name="type" placeholder="Choose Club Type" />
                <TextField id="add-email" name="email" />
                <LongTextField id="add-purpose" name="purpose" maxLength={50} />
                <SubmitField id="add-club-submit" value="submit" />
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
