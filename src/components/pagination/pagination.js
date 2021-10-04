import { Fragment } from 'react';

import './pagination.css'

const Pagination = ({pages, currentPage, setCurrentPage}) => {
    const pagesArray = [];
    let pass = false;

    for (let i = 1; i <=pages; i ++) {
        if (i >= (currentPage - 1) && i <= (currentPage + 1) || i === 1 || i == pages) {
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
                        <a className="page-link" role="button">
                            <span aria-hidden="true">…</span>
                        </a>
                        </li>
                    : ''
                }
                <li className={className}>
                    <a className="page-link" onClick = { (evt) => onBtnHandler(evt, index)} role="button" >{index}</a>
                </li>
            </Fragment>
        )
    } 
    );

    if ( pages <= 1 ) {
        return null;
    }
   
    return (
        <nav aria-label="Charackter paginations">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" onClick = {onPrevBtnHandler} href="#">Previous</a>
                </li>
                {paginations}
                <li className="page-item">
                    <a className="page-link"  onClick = {onNextBtnHandler} href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination;