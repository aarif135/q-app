import React,{Component} from 'react'

import { withRouter } from 'react-router-dom';
class Home extends Component{
render(){
return(<div>
    <h1>Home Component</h1>
    <button className='btn btn-primary'>Are You Company</button>
    <button className='btn btn-success'>Are You Normal user</button>


</div>)


}


}
export default withRouter(Home) 