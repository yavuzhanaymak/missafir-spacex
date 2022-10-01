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
          },
        };
        const res = await getApi.QueryLaunches(query);
        result = res.data.docs;
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
