import React from "react";

const TableItem = props => {
  return(
    <>
      <tr>
        <td>{props.number}</td>
        <td>{props.title}</td>
        <td>{props.traffic}</td>
        <td>{props.trafficPercent}%</td>
      </tr>
    </>
  )
};

export default TableItem;
