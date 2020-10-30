import React from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

export default class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {},
            showModal: false
        }
    }
    handleSort = (key) => {
        const ascending = key === this.props.sortOptions.key
            ? !this.props.sortOptions.ascending
            : true;
        this.props.sortUsers(key, ascending);
    }

    handlePromptDelete(user) {
        this.setState({
            user: user,
            showModal: true
        });
    }

    handleRemoveUser = () => {
        this.props.removeUser(this.state.user);
        this.setState({ showModal: false});
    }

    render() {
        return (
            <>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th onClick={() => this.handleSort('id')}>Id</th>
                            <th onClick={() => this.handleSort('username')}>Name</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.users.map((user, idx) =>
                                <tr key={idx}>
                                    <td>
                                        {user.id}
                                    </td>
                                    <td>
                                        {user.username}
                                    </td>
                                    <td>
                                        {user.address.city}
                                    </td>
                                    <td>
                                        <Button onClick={() => this.handlePromptDelete(user)}>Remove me</Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <Modal show={this.state.showModal} animation={false}>
                    <Modal.Header>
                        <Modal.Title>Delete {this.state.user.username}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Are you sure you want to remove {this.state.user.username}?
                        </p>
                        <Button onClick={this.handleRemoveUser}>
                            Yes
                        </Button> what else?
                    </Modal.Body>
                </Modal>


            </>
        )
    }
}