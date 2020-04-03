import React,{ Component} from 'react'
import Store from './Store'
import Router from './Components/Config/Router'
import {Provider} from 'react-redux'
class App extends Component{

render(){
  
  return(
    <Provider store={Store}>
  
  <div>

   <Router/>
  </div>
  
</Provider>

  )


}}
export default App;
