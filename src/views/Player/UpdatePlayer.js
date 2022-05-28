import { useFormik } from 'formik';
import React, { Fragment, useState, useEffect } from 'react'
import moment from 'moment';
import _, { values } from "lodash"
import { toastr } from 'react-redux-toastr';
import ReactDatePicker from 'react-datepicker';
import { UPDATE_MODAL_PLAYER } from 'redux/actions/types/PlayerManageType';
import { useDispatch, useSelector } from 'react-redux';
import { updatePlayer } from 'redux/actions/PlayerManageAction';

export default function UpdatePlayer(props) {
    const player = props;
    const { modalPlayer } = useSelector(rootReducer => rootReducer.PlayerManageReducer)

    const [startDate, setStartDate] = useState(new Date(player.dateOfBirth));
    const [name, setName] = useState(player.name);
    const [imageURL, setImageURL] = useState(player.imageURL);
    console.log(name, "modalPlayer");
    const dispatch = useDispatch()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            Name: name,
            ImageURL: imageURL,
            DateOfBirth: startDate
        },
        validate: values => {

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
            if (!values.DateOfBirth) {
                errors.DateOfBirth = "Date of Birth is required"
                toastr.error("Date of Birth is required")
            }
            if (_.isEmpty(errors)) {
                dispatch(updatePlayer(player.id, values))
                console.log("value", values);

            }

        }
    })
    return (
        <Fragment>
            <div>
                <button type="button" style={{ border: 'none', background: 'transparent' }} data-toggle="modal" data-target={`#updatePlayerModal${player.id}`}
                    onClick={() => {
                        console.log("hello");
                        const action = {
                            type: UPDATE_MODAL_PLAYER,
                            modalPlayer: player
                        }
                        dispatch(action)
                    }}
                >
                    <i class='fas fa-edit'></i>
                </button>
                {/* The Modal */}
                <div className="modal" id={`updatePlayerModal${player.id}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                                <h4 className="modal-title">Update Player </h4>
                                <button type="button" className="close" data-dismiss="modal">×</button>
                            </div>
                            {/* Modal body */}
                            <div className="modal-body">
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='form form-group'>
                                        <input type="text" id="Name" className="form__input" autoComplete="off" placeholder=" "
                                            onChange={(e) => setName(e.target.value)}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.Name} />
                                        <label htmlFor='Name' className='form__label'>Player Name</label>

                                    </div>
                                    <div className='form form-group'>
                                        <input type="text" id="ImageURL" className="form__input" autoComplete="off" placeholder=" "
                                            onChange={(e) => setImageURL(e.target.value)}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.ImageURL} />
                                        <label htmlFor='Name' className='form__label'>Player Image</label>

                                    </div>
                                    <div className='form form-group'>
                                        <input type="text" id="DateOfBirth" className="form__input" autoComplete="off" placeholder=" "
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={moment(formik.values.DateOfBirth).format('DD-MM-yyyy')} />
                                        <ReactDatePicker dateFormat="dd-MM-yyyy" id='DateOfBirth' wrapperClassName="picker" autoComplete='off' selected={startDate} onChange={(date) => setStartDate(date)} />
                                        <label htmlFor='picker' className='form__label'>Date of Birth</label>

                                    </div>
                                    <button type='submit' className='btn btn-success' >Update</button>
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
