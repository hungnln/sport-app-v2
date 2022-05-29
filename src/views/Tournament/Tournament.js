import Pagination from 'components/Pagination/Pagination';
import _ from 'lodash';
import React, { Fragment, useCallback, useEffect } from 'react'
import moment from 'moment';
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getListTournamentsAction } from 'redux/actions/TournamentManageAction';
import CreateTournament from './CreateTournament';
import { OPEN_MODAL } from 'redux/actions/types/ModalType';
import Modal from 'components/Modal/Modal';
import UpdateTournament from './UpdateTournament';
import DeleteTournament from './DeleteTournament';
export default function Tournament() {
    const { listTournaments, pagination } = useSelector(rootReducer => rootReducer.TournamentManageReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListTournamentsAction())
    }, [])
    const callbackFunction = useCallback((pageNumber) => {
        dispatch(getListTournamentsAction(pageNumber))
    }, [])
    const renderTournament = () => {
        return <Fragment>
            <Col md="12">
                <Card className="strpied-tabled-with-hover">
                    <Card.Header>
                        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal"
                            onClick={() => {
                                const action = {
                                    type: OPEN_MODAL,
                                    headingName: 'Create new tournament',
                                    component: <CreateTournament />
                                }
                                dispatch(action)
                            }}>
                            Create new tournament
                        </button>
                        <Card.Title as="h4">Tournament List </Card.Title>
                        <p className="card-category">
                            Here is a subtitle for this table
                        </p>
                    </Card.Header>
                    <Card.Body className="table-full-width table-responsive px-0">
                        <Table className="table-hover table-striped">
                            <thead>
                                <tr>
                                    <th className="border-0">ID</th>
                                    <th className="border-0">Name</th>
                                    <th className='border-0'>From</th>
                                    <th className='border-0'>To</th>
                                    <th>Tùy chỉnh</th>
                                </tr>
                            </thead>
                            <tbody>
                                {_.orderBy(listTournaments, ['id'], ['asc'])?.map((tournament, index) => {
                                    return <tr>
                                        <td>{tournament.id}</td>
                                        <td>{tournament.name}</td>
                                        <td>{moment(tournament.from).format('DD/MM/yyyy')}</td>
                                        <td>{moment(tournament.to).format('DD/MM/yyyy')}</td>
                                        <td className='d-flex'>
                                            <button type="button" style={{ border: 'none', background: 'transparent' }} data-toggle="modal" data-target="#myModal"
                                                onClick={() => {
                                                    const action = {
                                                        type: OPEN_MODAL,
                                                        headingName: `Edit ${tournament.name}`,
                                                        component: <UpdateTournament {...tournament} />
                                                    }
                                                    dispatch(action)
                                                }}
                                            >
                                                <i class='fas fa-edit'></i>
                                            </button>
                                            <button type="button" style={{ border: 'none', background: 'transparent' }} data-toggle="modal" data-target="#myModal"
                                                onClick={() => {
                                                    const action = {
                                                        type: OPEN_MODAL,
                                                        headingName: `Delete ${tournament.name}`,
                                                        size: 'modal-sm',
                                                        component: <DeleteTournament {...tournament} />
                                                    }
                                                    dispatch(action)
                                                }}
                                            >
                                                <i class='fas fa-trash'></i>
                                            </button>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </Table>
                    </Card.Body>
                    <Pagination {...pagination} paginationCallBack={callbackFunction}></Pagination>
                </Card>
            </Col>
        </Fragment>
    }
    return (
        <Fragment>
            <div className='row'>{renderTournament()}</div>
            <Modal />
        </Fragment>
    )
}
