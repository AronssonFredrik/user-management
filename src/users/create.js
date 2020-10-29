import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export default class UserCreate extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            address: {
                city: 'Stockholm'
            }
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.props.handleCreate(this.state);
    }

    handleStateChange = (event, target) => {
        this.setState({ [target]: event.target.value });
    }

    render() {
        return (

            <Modal show animation={false}>
                <Modal.Header>
                    <Modal.Title>Create new user</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="John Doe" required onChange={(e) => this.handleStateChange(e, 'username')} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>City</Form.Label>
                            <Form.Control as="select" required
                                onChange={(e) => this.handleStateChange(e, 'address.city')}>
                                <option>
                                    Stockholm
                                </option>
                                <option>
                                    Göteborg
                                </option>
                                <option>
                                    Malmö
                                </option>
                                <option>
                                    Uppsala
                                </option>
                                <option>
                                    Örebro
                                </option>
                            </Form.Control>
                        </Form.Group>

                        <Button type="submit">
                            Submit
                        </Button>

                    </Form>

                </Modal.Body>
            </Modal>
        )
    }
}