import { useFormik } from 'formik'
import { values } from 'lodash'
import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import "./style.scss"
import * as Yup from "yup";
import { toastr } from 'react-redux-toastr'
import { history } from 'index'
export default function Login(props) {
    // const [error, setError] = useRef({})
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
            // const errors = {}
            // if (!values.username && !values.password) {
            //     errors.username = "Username or password is invalid"
            //     toastr.error("Username or password is invalid")
            // }
            // else if (!values.username) {
            //     errors.username = "Username is required"
            //     toastr.error("Username is required")


            // } else if (!values.password) {
            //     errors.username = "Password is required"
            //     toastr.error("Password is required")

            // }
            // return errors
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

            }

            if (values.username === "admin" && values.password === "admin") {
                history.push('/admin')
            }
            console.log("login-test", values);
        }
    })
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
                                <a className='login__link'><img src='/images/login-register/google-icon.jpg' /></a>
                                <a className='login__link'><img src='/images/login-register/google-icon.jpg' /></a>
                                <a className='login__link'><img src='/images/login-register/google-icon.jpg' /></a>

                            </div>
                        </div>
                        <div><span>Don't have account ?</span><NavLink to={'/register'}>Register</NavLink></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
