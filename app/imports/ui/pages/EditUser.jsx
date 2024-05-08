import React, {useState} from 'react';
import { Meteor } from 'meteor/meteor';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { AutoForm, ErrorsField, SubmitField, TextField, SelectField, HiddenField } from 'uniforms-bootstrap5';
import SimpleSchema2Bridge from 'uniforms-bridge-simple-schema-2';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import swal from 'sweetalert';
import { Users } from '../../api/Users/User';
import LoadingSpinner from '../components/LoadingSpinner';
import ImageUpload from '../components/ImageUpload';

const bridge = new SimpleSchema2Bridge(Users.schema);

const EditUserPage = () => {
    // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
    const { _id } = useParams();
    console.log('User ID from URL:', _id);
    // console.log('EditStuff', _id);
    // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
    const { doc, ready } = useTracker(() => {
        // Get access to Stuff documents.
        const subscription = Meteor.subscribe(Users.userPublicationName, _id);
        // Determine if the subscription is ready
        const rdy = subscription.ready();
        // Get the document
        const document = Users.collection.findOne(_id);
        console.log('Document fetched:', document);
        return {
            doc: document,
            ready: rdy,
        };
    }, [_id]);


    const [picture, setPicture] = useState(doc.picture);

    const submit = (data) => {
        const { firstName, lastName, title } = data;
        Users.collection.update(_id, { $set: { firstName, lastName, title, picture } }, (error) => (error ?
            swal('Error', error.message, 'error') :
            swal('Success', 'Item updated successfully', 'success')));
    };

    return ready ? (
        <Container id="edit-user-page"  className="mt-5">
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h2 className="text-center">Edit Profile</h2>
                    <AutoForm schema={bridge} model={doc} onSubmit={submit}>
                        <Card>
                            <Card.Body>
                                <TextField name="firstName" placeholder="First Name" />
                                <TextField name="lastName" placeholder="Last Name" />
                                <ImageUpload message={"Update Profile Picture"} setPicture={setPicture} />
                                <br></br>
                                <div className="text-center">
                                    <SubmitField id="update-profile-button" value="Update Profile" />
                                </div>
                                <ErrorsField />
                                <HiddenField name="email" />
                            </Card.Body>
                        </Card>
                    </AutoForm>
                </Col>
            </Row>
        </Container>
    ) : <LoadingSpinner />;
};

export default EditUserPage;