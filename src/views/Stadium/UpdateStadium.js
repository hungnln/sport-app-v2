import { useFormik } from 'formik';
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { updateStadiumAction } from 'redux/actions/StadiumManageAction';

export default function UpdateStadium(props) {
    const stadium = props
    const dispatch = useDispatch();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Name: stadium.name,
            Address: stadium.address,
            ImageUrl: stadium.imageUrl
        },
        validate: values => {
        },
        onSubmit: values => {
            const errors = {}
            if (!values.Name) {
                errors.Name = "Club name is required"
                toastr.error("Club name is required")
            }
            if (!values.Address) {
                errors.Address = "Club address is required"
                toastr.error("Club address is required")
            }
            if (!values.ImageUrl) {
                errors.ImageUrl = "Club image is required"
                toastr.error("Club image is required")
            }
            if (_.isEmpty(errors)) {
                dispatch(updateStadiumAction(stadium.id, values))
                formik.resetForm()
                console.log("value1", values);
            }

        }
    })
    return (
        <Fragment>
            <form onSubmit={formik.handleSubmit}>
                <div className='form form-group'>
                    <input type="text" id="Name" className="form__input" autoComplete="off" placeholder=" "
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Name} />
                    <label htmlFor='Name' className='form__label'>  Name</label>

                </div>


                <div className='form form-group'>
                    <input type="text" id="Address" className="form__input" autoComplete="off" placeholder=" "
                        max={formik.values.To}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Address} />
                    <label htmlFor='Address' className='form__label'>Address</label>


                </div>

                <div className='form form-group'>
                    <input type="text" id="ImageUrl" className="form__input" autoComplete="off" placeholder=" "
                        min={formik.values.From}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.ImageUrl} />
                    <label htmlFor='ImageUrl' className='form__label'>ImageUrl</label>
                </div>
                <button type='submit' className='btn btn-success'>Update</button>
            </form>
        </Fragment >
    )
}
