import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { deleteStdiumAction } from 'redux/actions/StadiumManageAction'

export default function DeleteStadium(props) {
    const dispatch = useDispatch()
    return (
        <Fragment>
            <div>Please confirm to delete {props.name} ?</div>
            <button className='btn btn-success'
                onClick={
                    () => { dispatch(deleteStdiumAction(props.id)) }}
            >Delete</button>
        </Fragment>
    )
}
