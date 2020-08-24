import React, {useState} from "react";
import styles from "../../Content/Users/Users.module.css";

export default function Paginator({totalUsersCount, pageSize, currentPage, onPageClick, portionSize = 10}) {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div>
        {portionNumber > 1 &&
        <button onClick={() => { setPortionNumber(portionNumber - 1) }}>&lt;</button>}
        {pages.filter((page) => {
            return page >= leftPortionPageNumber && page <= rightPortionPageNumber
        }).map((page) => {
            const classPage = currentPage === page ? styles.selectedPage + " " + styles.pageNumber : styles.pageNumber;
            return (
                <button className={classPage} key={page} onClick={() => {onPageClick(page)}}>{page}</button>
            );
        })}
        { portionCount > portionNumber &&
        <button onClick={() => { setPortionNumber(portionNumber + 1) }}>&gt;</button> }
        </div>
    )


    // return <div>
    //     {pages.map((page) => {
    //         const classPage = currentPage === page ? styles.selectedPage + " " + styles.pageNumber : styles.pageNumber;
    //         return (
    //             <button className={classPage} key={page} onClick={() => {onPageClick(page)}}>{page}</button>
    //         );
    //     })}
    // </div>
}
