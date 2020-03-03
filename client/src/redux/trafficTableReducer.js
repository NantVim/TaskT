const REFRESH_TRAFFIC_DATA = 'REFRESH_TRAFFIC_DATA';
const SET_TRAFFIC_DATA = 'SET_TRAFFIC_DATA';
const CHANGE_FETCHING_STATUS = 'CHANGE_FETCHING_STATUS';

let initialState = {
  trafficData: [],
  totalTraffic: 0,
  isFetching: false
};

const trafficTableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRAFFIC_DATA:
      try {
        let totalTraffic = 0;
        let tempTrafficObjects = [];
        action.trafficData.map(item => totalTraffic += item['traffic']);
        action.trafficData.map((item, index) =>
          tempTrafficObjects[index] = {...item, trafficPercent: Math.floor(item['traffic']/(totalTraffic/100))});
        return ({
          ...state,
          trafficData: tempTrafficObjects.filter(item => item['trafficPercent'] > 2),
          totalTraffic: totalTraffic
        });
      }
      catch (e) {
        console.log(e)
      }
      return ({...state});
    case REFRESH_TRAFFIC_DATA:
      return ({
        trafficData: [],
        totalTraffic: 0,
        isFetching: false
      });
    case CHANGE_FETCHING_STATUS:
      return ({
        ...state,
        isFetching: action.isFetching
      });
    default: return state;
  }
};

export const refreshTrafficDataAC = () =>
  ({type: REFRESH_TRAFFIC_DATA});

export const setTrafficDataAC = trafficData =>
  ({type: SET_TRAFFIC_DATA, trafficData});

export const isFetchingAC = isFetching =>
  ({type: CHANGE_FETCHING_STATUS, isFetching});

export default trafficTableReducer;