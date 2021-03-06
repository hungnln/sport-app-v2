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
import CreateStadium from './CreateStadium';
import { useDispatch, useSelector } from 'react-redux';
import UpdateStadium from './UpdateStadium';
import DeleteStadium from './DeleteStadium';
import Modal from 'components/Modal/Modal';
import { OPEN_MODAL } from 'redux/actions/types/ModalType';
import { getListStadiumsAction } from 'redux/actions/StadiumManageAction';
export default function Stadium() {
  const { listStadiums, pagination } = useSelector(rootReducer => rootReducer.StadiumManageReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getListStadiumsAction())
  }, [])
  const callbackFunction = useCallback((pageNumber) => {
    dispatch(getListStadiumsAction(pageNumber))
  }, [])
  const renderStadium = () => {
    return <Fragment>
      <Col md="12">
        <Card className="strpied-tabled-with-hover">
          <Card.Header>
            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal"
              onClick={() => {
                const action = {
                  type: OPEN_MODAL,
                  headingName: 'Create new stadium',
                  component: <CreateStadium />
                }
                dispatch(action)
              }}>
              Create new stadium
            </button>
            <Card.Title as="h4">Stadium List </Card.Title>
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
                  <th className='border-0'>Address</th>
                  <th className='border-0'>ImageUrl</th>
                  <th>T??y ch???nh</th>
                </tr>
              </thead>
              <tbody>
                {_.orderBy(listStadiums, ['id'], ['asc'])?.map((stadium, index) => {
                  return <tr key={index}>
                    <td>{stadium.id}</td>
                    <td>{stadium.name}</td>
                    <td>{stadium.address}</td>
                    <td>{stadium.imageUrl}</td>
                    <td className='d-flex'>
                      <button type="button" style={{ border: 'none', background: 'transparent' }} data-toggle="modal" data-target="#myModal"
                        onClick={() => {
                          const action = {
                            type: OPEN_MODAL,
                            headingName: `Edit ${stadium.name}`,
                            component: <UpdateStadium {...stadium} />
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
                            headingName: `Delete ${stadium.name}`,
                            size: 'modal-sm',
                            component: <DeleteStadium {...stadium} />
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
      <div className='row'>{renderStadium()}</div>
      <Modal />
    </Fragment>
  )
}
