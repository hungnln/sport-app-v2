import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTournamentAction } from 'redux/actions/TournamentManageAction'

export default function DeleteTournament(props) {
    const tournament = props
    const dispatch = useDispatch()
    return (
        <Fragment>
            <div>Please confirm to delete {tournament.name} ?</div>
            <button className='btn btn-success'
                onClick={
                    () => { dispatch(deleteTournamentAction(tournament.id)) }}
            >Delete</button>
        </Fragment>
    )
}
