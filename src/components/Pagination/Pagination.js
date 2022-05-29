import React from 'react'

export default function Pagination(props) {
    const pagination = props;
    const clickPagination = (pageNumber) => {
        props.paginationCallBack(pageNumber)
    }
    const renderPagination = () => {
        for (let index = 1; index <= pagination.totalPages; index++) {
            return <li className="page-item"><a className={pagination.currentpage === index ? 'page-link active' : 'page-link'} href="#" onClick={() => clickPagination(index)}>{index}</a></li>

        }
    }
    return (
        <ul className="pagination">
            <li className={pagination.hasPrevious ? 'page-item' : 'page-item disabled'}><a className="page-link" href="#" onClick={() => clickPagination(pagination.currentpage - 1)}>Previous</a></li>
            {renderPagination()}
            <li className={pagination.hasNext ? 'page-item' : 'page-item disabled'}><a className="page-link" href="#" onClick={() => clickPagination(pagination.currentpage + 1)}>Next</a></li>
        </ul >
    )
}
