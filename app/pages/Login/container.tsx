import React, { useContext, useEffect } from 'react'
import usePost from '../../../hooks/usePost'
import RegisterForm from './component'
import { AppContext } from '../../context/AppContext'
import { Types } from '../../models/reducerTypes'

const RegisterFormContainer = () => {
    const { dispatch } = useContext(AppContext)
    const { data, error, isLoading, postApi } = usePost()

    useEffect(() => {
        if (data) {
            dispatch({ type: Types.LoginSuccess, payload: true })
        }
    }, [data])

    const onSubmit = async (values: { email: string; password: string }) => {
        await postApi('login', values)
    }

    return (
        <RegisterForm error={error} isLoading={isLoading} onSubmit={onSubmit} />
    )
}

export default RegisterFormContainer
