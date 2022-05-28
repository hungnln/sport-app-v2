import { useFormik } from 'formik'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Register() {
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
            <div className='register'>
                <h2 className='register__heading'>register</h2>
                <div className='register__body'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='form form-group'>
                                    <input type="text" id="username" className="form__input" autoComplete="off" placeholder=" "
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username} />
                                    <label htmlFor='username' className='form__label'>Username</label>

                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-4'>
                                <div className='form form-group'>
                                    <input type="text" id="username" className="form__input" autoComplete="off" placeholder=" "
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username} />
                                    <label htmlFor='username' className='form__label'>Username</label>

                                </div>
                            </div>
                            <div className='col-8'>
                                <div className='form form-group'>
                                    <input type="text" id="username" className="form__input" autoComplete="off" placeholder=" "
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.username} />
                                    <label htmlFor='username' className='form__label'>Username</label>

                                </div>
                            </div>
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
                        <button type='submit' className='btn btn-primary' id='btnRegister'>Sign up</button>
                        <div><span>Don't have account ?</span><NavLink to={'/register'}>Register</NavLink></div>
                    </form>
                </div>
            </div>
        </div>
    )
}
