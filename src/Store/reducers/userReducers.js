const reducer = (state = {}, action) => {
  console.log("reducer--->", action.type);
  switch (action.type) {
    case "UPDATE_USER":
      return { ...state, user: action.user };
      
    case "INFO_REQUEST":
      console.log(action.data,"INFO_REQUEST");
      let action2=action.data
      action2.forEach(item=>{
      item.forEach(data=>{
        const information=data.data()
        return { ...state, companyInfo: information }
      
        })
      })
      
     ;
    case "TOKEN_REQ":
      console.log(action.token1)
     
    default: {
      return {...state,tokens:action.token1};
    }
  }
};
export default reducer;
