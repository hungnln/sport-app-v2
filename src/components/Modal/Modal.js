import React from 'react'
import { useSelector } from 'react-redux'

export default function Modal() {
    const { headingName, component, size } = useSelector(rootReducer => rootReducer.ModalReducer)
    return (
        <div className="modal" id="myModal">
            <div className={`modal-dialog ${size}`}>
                <div className="modal-content">
                    {/* Modal Header */}
                    <div className="modal-header">
                        <h4 className="modal-title">{headingName}</h4>
                        <button type="button" className="close" data-dismiss="modal">×</button>
                    </div>
                    {/* Modal body */}
                    <div className="modal-body">
                        {component}
                    </div>
                    {/* Modal footer */}
                </div>
            </div>
        </div>

    )
}
