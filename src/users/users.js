import Axios from 'axios';
import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import UserList from './list';

export default class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            loading: true
        }
    }
    componentDidMount() {
        Axios.get('http://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    users: res.data,
                    loading: false
                });
            });
    }
    render() {
        return (
            <>
                <Jumbotron bg="dark" variant="dark">
                    <Container>
                        <h1 className="display-4">Users</h1>
                        <p className="lead">Available users</p>
                    </Container>
                </Jumbotron>
                <UserList users={this.state.users}></UserList>
            </>
        )
    }
}
