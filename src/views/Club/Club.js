import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListCLubAction } from 'redux/actions/ClubManageAction';

export default function Club(props) {
    const { listClub } = useSelector(rootReducer => rootReducer.ClubManageReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListCLubAction())
        console.log(listClub, "list");
    }, [])
    return (
        <div>1</div>
    )
}
