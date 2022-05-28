import { useFormik } from 'formik';
import _, { values } from 'lodash';
import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { createNewTourNamentAction } from 'redux/actions/TournamentManageAction';

export default function CreateTournament() {
    const dispatch = useDispatch();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Name: "",
            From: "",
            To: ""
        },
        validate: values => {
        },  
        onSubmit: values => {
            const errors = {}
            if (!values.Name) {
                errors.Name = "Player name is required"
                toastr.error("Tournament name is required")
            }
            if (!values.From) {
                errors.Name = "Player image is required"
                toastr.error("Date begin is required")
            }
            if (!values.To) {
                errors.Name = "Player image is required"
                toastr.error("Date end is required")
            }
            if (_.isEmpty(errors)) {
                dispatch(createNewTourNamentAction(values))
                console.log("value1", values);
            }

        }
    })
    return (
        <Fragment>
            <div>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#createTournamentModal">
                    Create Player
                </button>
                {/* The Modal */}
                <div className="modal" id="createTournamentModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Create new tournament</h4>
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
                                        <label htmlFor='Name' className='form__label'>Tournament Name</label>

                                    </div>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <div className='form form-group'>
                                                <input type="date" id="From" className="form__input" autoComplete="off" placeholder=" "
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.From} />
                                                <label htmlFor='From' className='form__label'>From</label>

                                            </div>
                                        </div>
                                        <div className='col-6'>
                                            <div className='form form-group'>
                                                <input type="date" id="To" className="form__input" autoComplete="off" placeholder="dd/mm/yyyy"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.To} />
                                                <label htmlFor='To' className='form__label'>To</label>

                                            </div>
                                        </div>
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
