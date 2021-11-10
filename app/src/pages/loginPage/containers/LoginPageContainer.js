import React from 'react'
import useForm from '../../../hooks/useForm'
import { LoginForm } from '../components/loginForm'
import { useDispatch } from 'react-redux'
import { LOG_IN_REQUEST } from '../actions'
import { useCallback } from 'react'

export const LoginPageContainer = () => {
        const dispatch = useDispatch();
        const [formData, handleChange, handleReset] = useForm({
                email:'',
                password:'',
        })

        const handleSubmit = useCallback((event) => {
                event.preventDefault();
                        dispatch(LOG_IN_REQUEST(formData))
                },[formData])
        return (
                <LoginForm
                        formValue={formData}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                />
        )
}

