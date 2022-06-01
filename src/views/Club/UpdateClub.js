import { FormikProvider, useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateStadiumAction } from 'redux/actions/StadiumManageAction';
import { getListStadiumsAction } from 'redux/actions/StadiumManageAction';

export default function UpdateClub(props) {
  const { listStadiums } = useSelector(rootReducer => rootReducer.StadiumManageReducer)
  const dispatch = useDispatch();
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: {
      Name: props.name,
      HeadQuarter: props.headQuarter,
      StadiumID: props.stadiumID
    },
    validate: values => {

    },
    onSubmit: values => {
      const errors = {}
      if (!values.Name) {
        errors.Name = "Club name is required"
        toastr.error("Club name is required")
      }
      if (!values.HeadQuarter) {
        errors.HeadQuarter = "Club HeadQuarter is required"
        toastr.error("Club HeadQuarter is required")
      }
      if (_.isEmpty(errors)) {
        console.log(props.id, values);
        // dispatch(updateStadiumAction(props.id, values))
      }

    }
  })
  useEffect(() => {
    dispatch(getListStadiumsAction())
  }, [])
  useEffect(() => {
    $(document).ready(function () {
      $('.test').select2({
        placeholder: "Select a state",
        dropdownParent: $('#myModal .modal-content')
      }).select2("val", props?.stadiumID);
    });
  })
  $('.test').on('select2:select', function (e) {
    console.log("e", e.params.data.id);
    formik.setValues({ ...formik.values, StadiumID: e.params.data.id })
    console.log("club", formik.values);
  });
  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
        <div className='form form-group'>
          <input type="text" id="Name" className="form__input" autoComplete="off" placeholder=" "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.Name} />
          <label htmlFor='Name' className='form__label'> Name</label>

        </div>


        <div className='form form-group'>
          <input type="text" id="HeadQuarter" className="form__input" autoComplete="off" placeholder=" "
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.HeadQuarter} />
          <label htmlFor='HeadQuarter' className='form__label'>HeadQuarter</label>


        </div>

        <div className='form form-group'>
          <select as="select" id="StadiumID" className="test form__input" name='StadiumID' autoComplete="off" placeholder=" "
            onBlur={formik.handleBlur}
            value={formik.values.StadiumID}
          // style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            {listStadiums?.map((stadium, index) => {
              return stadium.stadiumID === props.stadiumID ? <option key={index} value={stadium.id} selected
              > {stadium.name}</option> :
                <option id={stadium.id} key={index} value={stadium.id}> {stadium.name}</option>
            })}

          </select>
          <label htmlFor='StadiumID' className='form__label'>Stadium</label>
        </div>
        <button type='submit' className='btn btn-success'>Create</button>
      </form>
    </FormikProvider >
  )
}
