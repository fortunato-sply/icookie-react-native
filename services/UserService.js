import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import api from '../config/api';
import { authSlice } from '../redux/authSlice';

const { setAuth } = authSlice.actions;

class UserService {
    static login = async (data) => {
        console.log(this.props);
        try {
            const response = await api.post("http://localhost:8080/auth/login", data)
                .then(res => {
                    const auth = {
                        token: res.data.token,
                        user: res.data.user
                    }

                    return auth;
                })
            
                console.log(response);
            return 200;
        } catch (err) {
            console.log(err.message);
            return 400;
        }
    }

    static logout() {

    }

    static register = async (data) => {
        try {
            const response = await api.post("http://localhost:8080/user/register", data)
                .then(res => {
                    console.log(res.data);
                });
            
            return 200;
        } catch (err) {
            console.log(err.message);
            return 400;
        }
    }
}

const mapDispatchToProps = {
    setAuth: setA
}

export default UserService;