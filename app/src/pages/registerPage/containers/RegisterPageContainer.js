
import React from 'react'
import useForm from '../../../hooks/useForm'

import { useDispatch, useSelector } from 'react-redux'
import { REGISTER_IN_REQUEST } from '../actions'
import { useCallback } from 'react'
import { RegisterForm } from '../components/registerForm'
import isEmail from 'validator/es/lib/isEmail'

export const RegisterPageContainer = () => {
        const dispatch = useDispatch();
        const {error} = useSelector(state => state.register)
        const [formData, handleChange, handleReset] = useForm({
                email:'',
                firstName: '',
                lastName: '',
                gender: '',
                password:'',
                phone: '',
        })

        const isEmailValid = isEmail(formData.email)
        const isPasswordValue = formData.password.length > 0

        const handleSubmit = useCallback((event) => {
                if(isEmailValid && isPasswordValue) {
                        event.preventDefault();
                        dispatch(REGISTER_IN_REQUEST(formData))
                }
                
                },[formData])
        return (
                <RegisterForm
                        error={error}
                        formValue={formData}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                />
        )
}

