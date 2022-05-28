import React from 'react'
import { useDispatch } from 'react-redux'
import { toastr } from 'react-redux-toastr'
import { deletePlayerAction } from 'redux/actions/PlayerManageAction'
import Player from './Player'

export default function DeletePlayer(props) {
    const player = props
    const dispatch = useDispatch()
    const deletePlayer = () => {
        dispatch(deletePlayerAction(player.id))
    }
    return (
        <div>
            <button type="button" className="" style={{ border: 'none', background: 'transparent' }} data-toggle="modal" data-target={`#deletePlayerModal${player.id}`}>
                <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
            {/* The Modal-- > */}
            <div className="modal fade" id={`deletePlayerModal${player.id}`}>
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">

                        {/* !-- Modal Header  */}
                        <div className="modal-header">
                            <h4 className="modal-title">Delete {player.name}</h4>
                            <button type="button" className="close" data-dismiss="modal">×</button>
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            Please confirm to delete {player.name} ?
                            <button className='btn btn-success' onClick={() => deletePlayer()}>Delete</button>

                        </div>
                        {/* Modal footer */}
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}
