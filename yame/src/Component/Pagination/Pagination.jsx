import React from 'react';
import { Link } from 'react-router-dom';
import "./Pagination.css"

const Pagination = (props) => {
    const { currentPage, prosPerPage, totalPros, paginate, nextPage, previousPage } = props;
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPros / prosPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <div className="YamePagination">
            <nav aria-label="Page navigation YMPagination ">
                <ul className="pagination YMPaginationUl">
                    <li className="page-item"><Link onClick={() => previousPage()} className="page-link" href="#">Previous</Link></li>
                    {
                        pageNumber.map(num => {
                            return (
                                < li className={currentPage == num ? "page-item active" : "page-item"} >
                                    <Link onClick={() => paginate(num)} className="page-link" >{num}</Link>
                                </li>
                            )
                        })
                    }
                    <li className="page-item"><Link onClick={() => nextPage()} className="page-link" href="#">Next</Link></li>
                </ul>
            </nav>
        </div >
    );
}

export default Pagination;
