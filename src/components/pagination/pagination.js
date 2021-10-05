import { Fragment } from 'react';
import PropTypes from "prop-types";

import './pagination.css'

const Pagination = ({pages, currentPage, setCurrentPage}) => {
    const pagesArray = [];
    let pass = false;

    for (let i = 1; i <=pages; i ++) {
        if ((i >= (currentPage - 1) && i <= (currentPage + 1)) || (i === 1 || i === pages)) {
            pagesArray.push({
                index: i,
                isActive: i === currentPage,
                pass
            })
         pass = false;
        } else {
            pass = true;
        }
    }

    const onPrevBtnHandler = (evt) => {
        evt.preventDefault();
        if ((currentPage - 1) > 1) {
            setCurrentPage(currentPage - 1);
        } 
    } 

    const onNextBtnHandler = (evt) => {
        evt.preventDefault();
        if ((currentPage + 1) <= pages) {
            setCurrentPage(currentPage + 1);
        }
    }

    const onBtnHandler = (evt, index) => {
        evt.preventDefault();
        if (index !== currentPage) {
            setCurrentPage(index);
        }
    }

    const paginations = pagesArray.map(({isActive, index, pass}) => {
        const className = `page-item ${isActive ? 'active' : ''}`;

        return (
            <Fragment key={index}>
                {pass 
                    ? <li className="page-item">
                        <span className="page-link">
                            <span aria-hidden="true">…</span>
                        </span>
                        </li>
                    : ''
                }
                <li className={className}>
                    <button className="page-link" onClick = { (evt) => onBtnHandler(evt, index)}>{index}</button>
                </li>
            </Fragment>
        )
    } 
    );

    if ( pages <= 1 ) {
        return null;
    }
   
    return (
        <nav className="container" aria-label="Charackter paginations">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" disabled={ currentPage === 1 ? 'disabled' : null}  onClick = {onPrevBtnHandler}>Previous</button>
                </li>
                {paginations}
                <li className="page-item">
                    <button className="page-link" disabled={ currentPage === pages ? 'disabled' : null}  onClick = {onNextBtnHandler}>Next</button>
                </li>
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    pages: PropTypes.number,
    currentPage: PropTypes.number,
    setCurrentPage: PropTypes.func,
  };
  
  Pagination.defaultProps = {
    pages: 1,
    currentPage: 1,
    setCurrentPage: () => {},

  };

export default Pagination;