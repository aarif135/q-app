import React,{Component} from 'react'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom';
import{ Example} from '../Modal'
class Home extends Component{

render(){
    console.log(this.props.user)

   
return(<div>
    <h1>user Logged in:arif</h1>
    <button className='btn btn-primary'>Are You Company</button>
    <button className='btn btn-success'>Are You awating for token</button>
    <Example/>
    
   
 
</div>)


}


}
const mapStateToProps=(state)=>{

    return{
      user:state.user
    }}
export default connect(mapStateToProps) (withRouter(Home))