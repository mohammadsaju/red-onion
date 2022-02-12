import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../assets/logo2.png';
import * as Yup from 'yup';
import InputField from '../components/InputField';
import { auth } from '../app/firebase';
import swal from 'sweetalert';

const SignUp = () => {
    const history = useHistory();

    const validate = Yup.object({
        name: Yup.string()
          .max(14, 'name must be less than 14 caracters')
          .required('name field is required'),
        email: Yup.string()
          .email('email is invalid')
          .required('email is required'),
        password: Yup.string()
          .min(6, 'password should be minimum 6 caracters')
          .max(8, 'password must be less than 8 caracters')
          .required('password is required'),
          confirm_password: Yup.string()
          .oneOf([ Yup.ref('password'),null], 'confirm password is not match')
          .required('confirm password is required'),
    });
    return (
        <>
        <section className="h-screen grid place-items-center">
            <div className="w-11/12 sm:w-8/12 md:w-1/2 lg:w-5/12 xl:w-3/12 p-10 rounded-md">
                <div className="flex justify-center mb-10">
                    <img className="object-contain w-44" src={logo}/>
                </div>
                <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    confirm_password: '',
                }}
                validationSchema={validate}
                onSubmit={({name, email, password}) => {
                    auth.createUserWithEmailAndPassword(email, password)
                    .then(userauth => {
                        userauth.user.updateProfile({
                            displayName: name
                        }).then(() => {
                            swal("Good job", "Account has been created!", "success")
                        })
                    })
                    .catch(err => {
                        swal("something went wrong", `${err.message}`, "error" )
                    })
                }}
                >
                    {formik => (
                        <Form>
                        <InputField name='name' type='text' placeholder='Name'/>
                        <InputField name='email' type='email' placeholder='Email'/>
                        <InputField name='password' type='password' placeholder='password'/>
                        <InputField name='confirm_password' type='password' placeholder='confirm password'/>
                        <input className="mb-3 block text-gray-100 font-semibold w-full bg-gray-100 p-2 rounded-md bg-red-500 hover:bg-red-600 transition cursor-pointer" type="submit"/>
                        <Link to='/login' className="flex justify-center text-lg font-semibold italic text-gray-500 cursor-pointer">Already have an account?</Link>
                    </Form>
                    )}
                </Formik>
            </div>
        </section>
        </>
    )
}

export default SignUp;
