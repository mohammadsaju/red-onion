import React from 'react';
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import { Form, Formik } from 'formik';
import InputField from '../components/InputField';
import * as Yup from 'yup';
import { auth } from '../app/firebase';
import swal from 'sweetalert';

const Login = () => {
    const {googleSignIn} = useFirebase();
    const validate = Yup.object({
        email: Yup.string()
          .email('email is invalid')
          .required('email is required'),
        password: Yup.string()
          .min(6, 'password should be minimum 6 caracters')
          .max(8, 'password must be less than 8 caracters')
          .required('password is required')
    });
    return (
        <>
            <section className="h-screen grid place-items-center">
                <div className="w-11/12 sm:w-8/12 md:w-1/2 lg:w-5/12 xl:w-3/12 p-10 rounded-md">
                    <div className="flex justify-center mb-10">
                        <img className="object-contain w-44" src={logo}/>
                    </div>
                    <div className="rounded-t px-6 pb-6">
                        <div className="text-center mb-3">
                            <h6 className="text-gray-600 text-sm font-bold">Sign in with</h6></div>
                        <div className="btn-wrapper text-center pb-5">
                            <button onClick={() => googleSignIn()} className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button"><img alt="google" className="w-5 mr-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3G1_GIszzyvBcF1eFgWhl5ULn8q_JhKZNaSykoYMKlg5BSvan7D7PlF1xOREVJWaYGO0&usqp=CAU"/>Google</button>
                            <button className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs" type="button" ><img alt="github" className="w-5 mr-1" src="https://www.pngrepo.com/png/94698/512/github.png"/>Github</button>
                        </div>
                        <hr className="mt-6 border-b-1 border-gray-400"/>
                    </div>
                    <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    validationSchema={validate}
                    onSubmit={({email, password}) => {
                        auth.signInWithEmailAndPassword(email, password)
                        .then(result => {
                            swal("Sign in successfully", "welcome back!", "info")
                        })
                        .catch(err => {
                            swal("something went wrong", `${err.message}`, "error")
                        })
                    }}
                    >
                        {formik => (
                            <Form>
                            <InputField name='email' type='email' placeholder='Email'/>
                            <InputField name='password' type='password' placeholder='Password'/>
                            <input className="mb-3 block text-gray-100 font-semibold w-full bg-gray-100 p-2 rounded-md bg-red-500 hover:bg-red-600 transition cursor-pointer" type="submit"/>
                            <Link to='/register' className="flex justify-center text-lg font-semibold italic text-gray-500 cursor-pointer">create new account?</Link>
                            </Form>
                        )}
                    </Formik>
                </div>
            </section>
        </>
    )
}

export default Login;
