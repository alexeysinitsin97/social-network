import React from "react";
import { useState } from "react";
import s from "./Pagination.module.css";
const Pagination = ({ props }) => {
  let count = Math.ceil(props.totalPages / props.pageSize);
  let pagesNumbers = [];
  for (let i = 1; i < count; i++) {
    pagesNumbers.push(i);
  }
  let totalPortion = Math.ceil(count / 10);
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortion = (portionNumber - 1) * 10 + 1;
  let rigthPortion = portionNumber * 10;

  return (

    <div  className={s.paginationItem}>

    {portionNumber > 1 ?<button  onClick={()=>setPortionNumber(portionNumber - 1)}>prev</button>:null}
     <ul className={s.Pagination}> {
        (pagesNumbers = pagesNumbers
          .filter((p) => p >= leftPortion && p <= rigthPortion)
          .map((n) => {
            return (
              <li
                className={
                  props.currentPage == n
                    ? `${s.pageNumber} + ${s.selected}`
                    : s.pageNumber
                }
                onClick={() => {
                  props.onPageChanged(n);
                }}
              >
                {n}
              </li>
            );
          }))
      }
      </ul>
      {portionNumber <= totalPortion ?<button onClick={()=>setPortionNumber(portionNumber + 1)}>Next</button>:null}
    </div>
  );
};
export default Pagination;
