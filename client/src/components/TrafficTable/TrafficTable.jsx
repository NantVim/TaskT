import React from "react";
import TableItem from "../TableItem/TableItem";
import './TrafficTable.module.css';
import {NavLink} from "react-router-dom";

const TrafficTable = props => {
  return(
    <div className="table">
      <div className="table-header z-depth-2">
        <h2>Traffic Table</h2>
        <span>Total Traffic: {props.totalTraffic}</span>
        <NavLink to='/traffic-table' onClick={props.reload} className='waves-effect waves-light btn reload-btn'> </NavLink>
      </div>
      {
        props.isFetching ?
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-waves-light">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div>
              <div className="gap-patch">
                <div className="circle"></div>
              </div>
              <div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
          :
          <table className='striped'>
            <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Traffic</th>
              <th>Traffic Percent</th>
            </tr>
            </thead>

            <tbody>
            {
              props.trafficData.map((item, index) =>
                <TableItem
                  number={index}
                  title={item['title']}
                  traffic={item['traffic']}
                  trafficPercent={item['trafficPercent']}
                />)
            }
            </tbody>
          </table>
      }
    </div>
  );
};

export default TrafficTable;