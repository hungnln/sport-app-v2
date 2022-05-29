import { Field, FormikProvider, useFormik } from 'formik';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { createNewClubAction } from 'redux/actions/ClubManageAction';
import { getListStadiumsAction } from 'redux/actions/StadiumManageAction';
export default function CreateClub(props) {
    const { listStadiums } = useSelector(rootReducer => rootReducer.StadiumManageReducer)
    const dispatch = useDispatch();
    const formik = useFormik({
        // enableReinitialize: true,
        initialValues: {
            Name: "",
            HeadQuarter: "",
            StadiumID: ""
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
                dispatch(createNewClubAction(values))
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
            });
        });
    })
    $('.test').on('select2:select', function (e) {
        console.log("e", e.params.data.id);
        formik.setFieldValue('StadiumID', e.params.data.id)
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
                    // onBlur={() => formik.setFieldTouched("StadiumID", true)}
                    // value={formik.values.StadiumID}
                    // style={{ paddingTop: 0, paddingBottom: 0 }}
                    >
                        {listStadiums?.map((stadium, index) => {
                            return <option key={index} value={stadium.id}
                            > {stadium.name}</option>
                        })}

                    </select>
                    <label htmlFor='StadiumID' className='form__label'>Stadium</label>
                </div>
                <button type='submit' className='btn btn-success'>Create</button>
            </form>
        </FormikProvider >
    )
}




