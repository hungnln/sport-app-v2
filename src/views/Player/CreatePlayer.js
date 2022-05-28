import { useFormik } from 'formik';
import React, { Fragment, useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import "./style.scss"
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { toastr } from 'react-redux-toastr';
import _ from "lodash"
import { useDispatch } from 'react-redux';
import { createNewPlayerAction } from 'redux/actions/PlayerManageAction';
export default function CreatePlayer() {
    const [startDate, setStartDate] = useState(new Date());
    const [name, setName] = useState("")
    const [imageURL, setImageURL] = useState("")
    const dispatch = useDispatch();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Name: "",
            ImageURL: "",
            DateOfBirth: ""
        },
        onSubmit: values => {
            const errors = {}
            if (!values.Name) {
                errors.Name = "Player name is required"
                toastr.error("Player name is required")
            }
            if (!values.ImageURL) {
                errors.Name = "Player image is required"
                toastr.error("Player image is required")
            }
            if (_.isEmpty(errors)) {
                toastr.success("Create new player success")
                dispatch(createNewPlayerAction(values))
                console.log("value1", values);
            }

        }
    })
    return (
        <Fragment>
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#createPlayerModal">
                    Create Player
                </button>
                {/* The Modal */}
                <div className="modal" id="createPlayerModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Create new player</h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='form form-group'>
                                        <input type="text" id="Name" className="form__input" autoComplete="off" placeholder=" "
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.Name} />
                                        <label htmlFor='Name' className='form__label'>Player Name</label>

                                    </div>
                                    <div className='form form-group'>
                                        <input type="text" id="ImageURL" className="form__input" autoComplete="off" placeholder=" "
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.ImageURL} />
                                        <label htmlFor='Name' className='form__label'>Player Image</label>

                                    </div>
                                    {/* <div className='form form-group'>
                                        <input type="text" id="DateOfBirth" className="form__input" autoComplete="off" placeholder=" "
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={moment(formik.values.DateOfBirth).format('DD-MM-yyyy')} />
                                        <DatePicker dateFormat="yyyy-dd-MM" id='DateOfBirth' wrapperClassName="picker" autoComplete='off' placeholder=" " selected={startDate} onChange={(date) => setStartDate(date)} />
                                        <label htmlFor='picker' className='form__label'>Date of Birth</label>

                                    </div> */}
                                    <div className='form form-group'>
                                        <input type="date" id="DateOfBirth" className="form__input" autoComplete="off" placeholder="dd/mm/yyyy"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.DateOfBirth} />
                                        <label htmlFor='DateOfBirth' className='form__label'>Date of Birth</label>

                                    </div>
                                    <button type='submit' className='btn btn-success'>Create</button>
                                </form>
                            </div>
                            {/* Modal footer */}
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
