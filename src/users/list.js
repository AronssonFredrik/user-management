import React from 'react';
import { Table } from 'react-bootstrap';

export default class UserList extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
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
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        )
    }
}