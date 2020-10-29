import Axios from 'axios';
import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';
import UserList from './list';
import UserCreate from './create';
import sortByProp from '../utils/sortByProp';

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
        Axios.get('http://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({ users: res.data });
            });
    }

    createUser = (newUser) => {
        Axios.post('http://jsonplaceholder.typicode.com/users', newUser)
            .then(res => {
                this.setState(prevState => ({
                    users: [res.data, ...prevState.users]
                }));
                this.openCreateWindow(false);
            });
    }

    removeUser = (user) => {
        Axios.delete(`http://jsonplaceholder.typicode.com/users/${user.id}`)
            .then(res => {
                this.setState(prevState => ({
                    users: prevState.users.filter(prevUser => prevUser.id !== user.id)
                }))
            });
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
