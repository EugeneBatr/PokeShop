
import React from 'react'
import useForm from '../../../hooks/useForm'

import { useDispatch } from 'react-redux'
import { REGISTER_IN_REQUEST } from '../actions'
import { useCallback } from 'react'
import { RegisterForm } from '../components/registerForm'

export const RegisterPageContainer = () => {
        const dispatch = useDispatch();
        const [formData, handleChange, handleReset] = useForm({
                email:'',
                firstName: '',
                lastName: '',
                gender: '',
                password:'',
                phone: '',
        })

        const handleSubmit = useCallback((event) => {
                event.preventDefault();
                        dispatch(REGISTER_IN_REQUEST(formData))
                },[formData])
        return (
                <RegisterForm
                        formValue={formData}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                />
        )
}

