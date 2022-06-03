import { useFormik } from 'formik'
import { values } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./style.scss"
import * as Yup from "yup";
import { toastr } from 'react-redux-toastr'
import { history } from 'index'
// import { signInWithGoogle } from 'utils/Firebase/Firebase'
import { ACCESSTOKEN } from 'utils/setting'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from 'utils/Firebase/Firebase'
import { useDispatch } from 'react-redux'
import { loginAction } from 'redux/actions/UserManageAction'

// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     signOut,
// } from "firebase/auth";
// import { getFirestore, addDoc, collection } from "firebase/firestore";
// import { login } from 'utils/FireBase/services/APIServices'
// const db = getFirestore();
// const auth = getAuth();
export default function Login(props) {
    // const [error, setError] = useRef({})


    const dispatch = useDispatch()
    const provider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            result.user.getIdToken().then(result => { const x = new Promise((resolve, reject) => { resolve(localStorage.setItem(ACCESSTOKEN, result)) }); x.then(dispatch(loginAction())) })
        }).catch((error) => console.log(error))

    }
    const [state, setState] = useState({ email: '', password: '' })
    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        // validationSchema: Yup.object({
        //     username: Yup.string()
        //         .required("Username is required"),

        //     password: Yup.string()
        //         .required("Password is required")
        // }),
        validate: values => {
        },
        onSubmit: values => {

            const errors = {}
            if (!values.username && !values.password) {
                errors.username = "Username or password is invalid"
                toastr.error("Username or password is invalid")
            }
            else if (!values.username) {
                errors.username = "Username is required"
                toastr.error("Username is required")


            } else if (!values.password) {
                errors.username = "Password is required"
                toastr.error("Password is required")

            } else {
                // login({ email, password })
                //     .then(({ user, token }) => {
                //         setState({
                //             email: '',
                //             password: ''
                //         })

                //         return loginSuccess({ user, token })
                //     })
                //     .then(() => {
                //         history.push('/admin/')
                //     })
                //     .catch(error => {
                //         const { message } = error
                //         console.log('error', message);

                //     })
            }


        }
    })
    if (localStorage.getItem(ACCESSTOKEN)) {
        history.goBack()
    }
    return (
        <div className='container'>
            <div className='login max'>
                <h2 className='login__heading'>Login</h2>
                <div className='login__body'>

                    <form onSubmit={formik.handleSubmit}>
                        <div className='form form-group'>
                            <input type="text" id="username" className="form__input" autoComplete="off" placeholder=" "
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username} />
                            <label htmlFor='username' className='form__label'>Username</label>

                        </div>
                        <div className='form form-group'>
                            <input type="password" id="password" className="form__input" autoComplete="off" placeholder=" "
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password} />
                            <label htmlFor="username" className="form__label">Password</label>

                        </div>
                        <div>
                            {formik.errors.username && formik.touched.username && (
                                <span>{formik.errors.username}</span>
                            )}
                            {formik.errors.password && formik.touched.password && (
                                <span> {formik.errors.password}</span>
                            )}
                        </div>
                        <button type='submit' className='btn btn-primary' id='btnLogin'>Login</button>
                        <div className='login__external'>
                            <div className='text-center'>Or Login with</div>
                            <div className='d-flex justify-content-evenly' style={{ justifyContent: 'space-evenly' }}>
                                <button onClick={signInWithGoogle}>signInWithGoogle</button>


                            </div>
                        </div>
                        <div><span>Don't have account ?</span><NavLink to={'/register'}>Register</NavLink></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
