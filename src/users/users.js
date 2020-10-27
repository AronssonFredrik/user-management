import Axios from 'axios';
import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import UserList from './list';

import sortByProp from '../utils/sortByProp';

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: true,
            sortOptions: {
                key: 'id',
                ascending: true
            }
        }
    }
    componentDidMount() {
        Axios.get('http://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                    users: res.data,
                    loading: false,
                    ascending: true
                });
            });
    }

    sortUsers = (key, ascending) => {
        console.log(`set ascending to: ${ascending}`);
        this.setState(prevState => ({
            users: sortByProp(prevState.users, key, ascending),
            sortOptions: {
                key: key,
                ascending: ascending
            }
        }));
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
                <UserList {...this.state} sortUsers={this.sortUsers}></UserList>
            </>
        )
    }
}
