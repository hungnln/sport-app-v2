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
import _ from "lodash"
import { useDispatch, useSelector } from 'react-redux'
import { getListPlayersAction } from 'redux/actions/PlayerManageAction'
import CreatePlayer from './CreatePlayer'
import DeletePlayer from './DeletePlayer';
import "./style.scss"
import UpdatePlayer from './UpdatePlayer';
import { MDBDataTable } from 'mdbreact';
import Pagination from 'components/Pagination/Pagination';
export default function Player() {
    const { userLogin } = useSelector(rootReducer => rootReducer.UserManageReducer)
    const { listPlayers, pagination } = useSelector(rootReducer => rootReducer.PlayerManageReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListPlayersAction())
    }, [])
    const callbackFunction = useCallback((pageNumber) => {
        console.log('pageNumber', pageNumber);
        dispatch(getListPlayersAction(pageNumber))
    }, [])
    const renderListPlayer = () => {
        if (userLogin?.role === "admin") {
            return <Fragment>
                <Col md="12">
                    <Card className="strpied-tabled-with-hover">
                        <Card.Header>
                            <CreatePlayer />
                            <Card.Title as="h4">Player List </Card.Title>
                            <p className="card-category">
                                Here is a subtitle for this table
                            </p>
                        </Card.Header>
                        <Card.Body className="table-full-width table-responsive px-0">
                            <Table className="table-hover table-striped">
                                <thead>
                                    <tr>
                                        <th className="border-0">Mã</th>
                                        <th className="border-0">Cầu thủ</th>
                                        <th className='border-0'>Thể loại</th>
                                        <th className='border-0'>Đội</th>
                                        <th>Tùy chỉnh</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {_.orderBy(listPlayers, ['id'], ['asc'])?.map((player, index) => {
                                        return <tr>
                                            <td>{player.id}</td>
                                            <td>{player.name}</td>
                                            <td>Tiền đạo</td>
                                            <td>
                                                <img className='club__logo' src="//ssl.gstatic.com/onebox/media/sports/logos/RWDf-QvHoH_l50a-SLFQ7A_48x48.png" alt="Team Logo" />
                                                <span className='club__name'>TP.HCM</span>
                                            </td>
                                            <td className='d-flex'><UpdatePlayer {...player} /> <DeletePlayer {...player} /></td>
                                        </tr>
                                    })}
                                </tbody>
                            </Table>
                        </Card.Body>
                        <Pagination {...pagination} paginationCallBack={callbackFunction}></Pagination>
                    </Card>

                </Col>

            </Fragment>

        } else {
            return listPlayers?.map((player, index) => {
                return <div className='col-2'>
                    <div className='player__card' key={player.id}>
                        <div className='player__img'>
                            <img src={player.imageURL} className="w-100"></img>
                        </div>
                        <div className='player__content'>
                            <div className='player__name text-left'>{player.name}</div>
                            <div className='player__type'>Tiền Đạo</div>
                            <div className='player__club'>
                                <img className='club__logo' src="//ssl.gstatic.com/onebox/media/sports/logos/RWDf-QvHoH_l50a-SLFQ7A_48x48.png" alt="Team Logo" />
                                <span className='club__name'>TP.HCM</span>
                            </div>
                        </div>
                    </div>
                </div>
            })
        }

    }
    return (
        <Fragment>
            <div className='row'>{renderListPlayer()}</div>
        </Fragment>

    )
}
