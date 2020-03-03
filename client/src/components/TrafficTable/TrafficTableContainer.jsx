import React from "react";
import TrafficTable from "./TrafficTable";
import {getTrafficObject} from "../../api/api";
import {isFetchingAC, refreshTrafficDataAC, setTrafficDataAC} from "../../redux/trafficTableReducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class TrafficTableContainer extends React.Component {
  componentDidMount() {
    this.props.setFetchingStatus(true);
    getTrafficObject()
      .then(r => this.props.setTrafficData(r))
      .then(r => this.props.setFetchingStatus(false));
  }

  render() {
    return <TrafficTable
      reload={this.componentDidMount.bind(this)}
      totalTraffic={this.props.totalTraffic}
      trafficData={this.props.trafficData}
      isFetching={this.props.isFetching}
    />
  }
}

let mapStateToProps = state => {
  return({
    trafficData: state.trafficTableReducer.trafficData,
    totalTraffic: state.trafficTableReducer.totalTraffic,
    isFetching: state.trafficTableReducer.isFetching
  })
};

let mapDispatchToProps = dispatch =>{
  return({
    setTrafficData: trafficData => dispatch(setTrafficDataAC(trafficData)),
    refreshTrafficData: () => dispatch(refreshTrafficDataAC()),
    setFetchingStatus: isFetching => dispatch(isFetchingAC(isFetching))
  })
};

let WithTrafficTableDataContainerComponent =  withRouter(TrafficTableContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithTrafficTableDataContainerComponent);
