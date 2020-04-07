import "firebase/firestore";
import * as firebase from "firebase/app";
function UpdateUser(user) {
  return {
    type: "UPDATE_USER",
    user,
  };
}

function formDataRequestAction(data) {
  console.log("formDataRequest",data);


  return {
    type: "INFO_REQUEST",
   data,
  };
}
function sendTokenstate(token1,time){
return {
  type:'TOKEN_REQ',
  token1,
  time
}
}
function companyInfo(data){
  console.log(data)

}
export { UpdateUser, formDataRequestAction,sendTokenstate,companyInfo };
