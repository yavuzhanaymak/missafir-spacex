import Axios from './get-axios';


function QueryLaunches(query) {
 
 
  return Axios.post('/launches/query',query);
}
function AllLaunches() {
 
 
  return Axios.get('/launches/');
}
function OneLaunch(id) {
 
 
  return Axios.get('/launches/'+id);
}
export default {

  QueryLaunches,
  AllLaunches,
  OneLaunch
 
};
