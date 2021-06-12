import React, {useState} from 'react';
import classes from "../Users/Users.scss";
import {getPageSize} from "../../redux/userSelector";
import  {Pagination} from 'antd';
import 'antd/dist/antd.css';


let Paginator = (props, {portionSize = 10}) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let portionCount = Math.ceil(pagesCount/props.pageSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionCount = (portionNumber -1) * portionSize + 1;
    let rightPortionCount = portionNumber * portionSize;
    const onChange = (page) => {
        props.onPageChanged(page)
    }

    return (
        // <div>
        //     {portionNumber > 1 &&
        //     <button onClick={ () => {setPortionNumber(portionNumber -1 )}}>PREV</button>
        //
        //     }
        //
        //     {pages
        //         .filter(p => p >= leftPortionCount && p<=rightPortionCount)
        //         .map(p => {
        //         return <span className={props.currentPage === p && classes.selected}
        //                      onClick={(e) => {
        //                          props.onPageChanged(p)
        //                      }}>{p}</span>
        //     })}
        //     {portionCount > portionNumber &&
        //         <button onClick={ () => {setPortionNumber(portionNumber +1)}}>Next</button>
        //
        //     }
        //
        // </div>
        <Pagination defaultCurrent={1} onChange={onChange} total={props.totalUsersCount} />
    )
}

export default Paginator;