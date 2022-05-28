import Pagination from 'components/Pagination/Pagination';
import _ from 'lodash';
import React, { Fragment, useCallback, useEffect } from 'react'
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
export default function Tournament() {
    const { listTournaments, pagination } = useSelector(rootReducer => rootReducer.TournamentManageReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListTournamentsAction())
    }, [])
    const callbackFunction = useCallback((pageNumber) => {
        dispatch(getListTournamentsAction(pageNumber))
    }, [])
    return (
        <Fragment>
            <Col md="12">
                <Card className="strpied-tabled-with-hover">
                    <Card.Header>
                        <CreateTournament />
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
                                        <td>Tiền đạo</td>
                                        <td>
                                            <img className='club__logo' src="//ssl.gstatic.com/onebox/media/sports/logos/RWDf-QvHoH_l50a-SLFQ7A_48x48.png" alt="Team Logo" />
                                            <span className='club__name'>TP.HCM</span>
                                        </td>
                                        <td className='d-flex'></td>
                                    </tr>
                                })}
                            </tbody>
                        </Table>
                    </Card.Body>
                    <Pagination {...pagination} paginationCallBack={callbackFunction}></Pagination>
                </Card>

            </Col>

        </Fragment>
    )
}
