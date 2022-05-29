import _ from 'lodash';
import React, { Fragment, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListCLubsAction } from 'redux/actions/ClubManageAction';
import { OPEN_MODAL } from 'redux/actions/types/ModalType';
import CreateClub from './CreateClub';
import DeleteClub from './DeleteClub';
import UpdateClub from './UpdateClub';
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
import Pagination from 'components/Pagination/Pagination';
import Modal from 'components/Modal/Modal';
export default function Club(props) {
    const { listClubs, pagination } = useSelector(rootReducer => rootReducer.ClubManageReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getListCLubsAction())
    }, [])
    const callbackFunction = useCallback((pageNumber) => {
        dispatch(getListCLubsAction(pageNumber))
    }, [])
    const renderClubList = () => {
        return <Fragment>
            <Col md="12">
                <Card className="strpied-tabled-with-hover">
                    <Card.Header>
                        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal"
                            onClick={() => {
                                const action = {
                                    type: OPEN_MODAL,
                                    headingName: 'Create new club',
                                    component: <CreateClub />
                                }
                                dispatch(action)
                            }}>
                            Create new club
                        </button>
                        <Card.Title as="h4">Club List </Card.Title>
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
                                    <th className='border-0'>HeadQuarter</th>
                                    <th className='border-0'>Stadium</th>
                                    <th>Tùy chỉnh</th>
                                </tr>
                            </thead>
                            <tbody>
                                {_.orderBy(listClubs, ['id'], ['asc'])?.map((club, index) => {
                                    return <tr key={index}>
                                        <td>{club.id}</td>
                                        <td>{club.name}</td>
                                        <td>{club.headQuarter}</td>
                                        <td>{club.stadiumID}</td>
                                        <td className='d-flex'>
                                            <button type="button" style={{ border: 'none', background: 'transparent' }} data-toggle="modal" data-target="#myModal"
                                                onClick={() => {
                                                    const action = {
                                                        type: OPEN_MODAL,
                                                        headingName: `Edit ${club.name}`,
                                                        component: <UpdateClub {...club} />
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
                                                        headingName: `Delete ${club.name}`,
                                                        size: 'modal-sm',
                                                        component: <DeleteClub {...club} />
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
            <div className='row'>{renderClubList()}</div>
            <Modal />
        </Fragment>
    )
}
