import Axios from 'axios';
import React from 'react';

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
        return (<></>)
    }
}
