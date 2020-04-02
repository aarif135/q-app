const reducer  =(state={},action)=>{
    console.log('reducer',action)
    switch(action.type){
        case 'UPDATE_USER':
            return{...state,user:action.user}
            default:{
                return{}
            }
    }

}
export default reducer