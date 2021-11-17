import React, { Children, useEffect } from 'react'
import useForm from '../../../hooks/useForm'
import { LoginForm } from '../components/loginForm'
import { useDispatch, useSelector } from 'react-redux'
import { LOG_IN_REQUEST } from '../actions'
import { useCallback } from 'react'
import { ROUTES } from '../../../routes/routeNames'
import {  useHistory } from 'react-router-dom'
import isEmail from 'validator/es/lib/isEmail'


export const LoginPageContainer = () => {
        const history = useHistory();
        const dispatch = useDispatch();

        const [formData, handleChange, handleReset] = useForm({
                email:'',
                password:'',
        })

        const {isAuth, error} = useSelector(state => state.auth);

        const isEmailValid = isEmail(formData.email)
        const isPasswordValue = formData.password.length > 0

        const handleSubmit = useCallback((event) => {
                if(isEmailValid && isPasswordValue) {
                        event.preventDefault();
                        dispatch(LOG_IN_REQUEST(formData));
                }
                
                        
                },[formData])
        
                useEffect(() => {
                        if(isAuth) {
                                history.push(ROUTES.HOME)
                        } 
                },[isAuth])
        
                


        return (
                <LoginForm
                        error={error}
                        isAuth={isAuth}
                        formValue={formData}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                       
                />
        )
}

