import { useFormik } from 'formik';
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { createNewStadiumAction } from 'redux/actions/StadiumManageAction';

export default function CreateStadium() {
  const dispatch = useDispatch();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      Name: "",
      Address: "",
      ImageUrl: ""
    },
    validate: values => {
    },
    onSubmit: values => {
      const errors = {}
      if (!values.Name) {
        errors.Name = "Stadium name is required"
        toastr.error("Stadium name is required")
      }
      if (!values.Address) {
        errors.Address = "Stadium address is required"
        toastr.error("Stadium address is required")
      }
      if (!values.ImageUrl) {
        errors.ImageUrl = "Stadium image is required"
        toastr.error("Stadium image is required")
      }
      if (_.isEmpty(errors)) {
        dispatch(createNewStadiumAction(values))
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Address} />
          <label htmlFor='Address' className='form__label'>Address</label>


        </div>

        <div className='form form-group'>
          <input type="text" id="ImageUrl" className="form__input" autoComplete="off" placeholder=" "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.ImageUrl} />
          <label htmlFor='ImageUrl' className='form__label'>ImageUrl</label>
        </div>
        <button type='submit' className='btn btn-success'>Create</button>
      </form>
    </Fragment >
  )
}
