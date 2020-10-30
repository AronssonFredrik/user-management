import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import UserList from './list';
import UserCreate from './create';
import sortByProp from '../../utils/sortByProp';

import Api from '../../service/api';

export default class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            create: false,
            users: [],
            loading: true,
            sortOptions: {
                key: 'id',
                ascending: true
            }
        }
    }
    componentDidMount() {
        Api.get('users').then(
            (res) => {
                this.setState({ users: res.data });
            }
        );
    }

    createUser = (newUser) => {
        Api.post('users', newUser).then(
            (res) => {
                this.setState(prevState => ({
                    users: [res.data, ...prevState.users]
                }));
                this.openCreateWindow(false);
            }
        );
    }

    removeUser = (user) => {
        Api.delete(`users/${user.id}`).then(
            (res) => {
                this.setState(prevState => ({
                    users: prevState.users.filter(prevUser => prevUser.id !== user.id)
                }));
            }
        );
    }

    sortUsers = (key, ascending) => {
        this.setState(prevState => ({
            users: sortByProp(prevState.users, key, ascending),
            sortOptions: {
                key: key,
                ascending: ascending
            }
        }));
    }

    openCreateWindow = (state) => {
        this.setState({
            create: state
        });
    }

    render() {
        return (
            <>
                <Jumbotron bg="dark" variant="dark">
                    <Container>
                        <h1 className="display-4">
                            Users
                        </h1>
                        <p className="lead">
                            Available users
                        </p>
                        <Button onClick={() => this.openCreateWindow(true)}>
                            Create user
                        </Button>
                    </Container>
                </Jumbotron>
                { this.state.create &&
                    <UserCreate handleCreate={this.createUser} />
                }
                <UserList {...this.state} sortUsers={this.sortUsers} removeUser={this.removeUser}></UserList>
            </>
        )
    }
}
