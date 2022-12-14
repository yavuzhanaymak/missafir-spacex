export const QUERY = "QUERY";
  

import getApi from "../../api/getApi";
export const queryLaunch = (fdate, edate) => {
  let result = {somethingNotNull: 'something'};

  return async (dispatch) => {
    if (edate !== "" && fdate !== "") {
      try {
        const query = {
          query: {
            date_utc: {
              $gte: fdate,
              $lte: edate,

            },
            options:{
              limit:50,
              sort:{
                 date_utc:"asc"
              }
           }
          },
        };
        const res = await getApi.QueryLaunches(query);
        result = res.data;
        console.log(res.data.totalDocs);
      } catch (e) {
        alert("Something went wrong!");
      }
      dispatch({
        type: QUERY,
        payload: result,
      });
    }
  };
};
export const queryLaunchWithName = (fdate, edate, Name) => {
  let result = {somethingNotNull: 'something'};

  return async (dispatch) => {
    if (edate !== "" && fdate !== "") {
      try {
        const query = {
          query: {
            date_utc: {
              $gte: fdate,
              $lte: edate,
              
            },
            $text: {
              $search: Name
            }
          },
          options:{
            limit:50,
            sort:{
               date_utc:"asc"
            }
         }
        };
        const res = await getApi.QueryLaunches(query);
        result = res.data;
        console.log(res.data.totalDocs);
      } catch (e) {
        alert("Something went wrong!");
      }
      dispatch({
        type: QUERY,
        payload: result,
      });
    }
  };
};
