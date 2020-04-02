import React,{Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
class Home extends Component{
render(){
    console.log(this.props.user)
    const{name,email}=this.props.user
    

return(<div>
    <h1>user Logged in:{name}</h1>
    <button className='btn btn-primary'>Are You Company</button>
    <button className='btn btn-success'>Are You Normal user</button>


</div>)


}


}
const mapStateToProps=(state)=>{

    return{
      user:state.user
    }}
export default connect(mapStateToProps) (withRouter(Home))