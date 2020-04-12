import React,{Component} from "react";
import * as firebase from "firebase/app";
import Background from "../../images/backgroud.jpg";
import Swal from 'sweetalert2'


class User extends Component {
    constructor(){
        super()
        this.state={
             companyData:[],
             searchValue:[],
             deatail:false,
          
        }
        
    }
    componentDidMount(){
        const db=firebase.firestore()
        let allData=[]
        let dataObj={}
        db.collection('companyData').onSnapshot(item=>{
          item.forEach(doc=>{
            doc.data()
                  allData.push(doc.data())
          })
          dataObj=allData
          
         this.setState({
           companyData:dataObj
         })
        })
        this.data()
    }
    data=(key,value)=>{
      this.setState({
        add:value
      })
        
       const val=value
    
        const{companyData}=this.state
       let data= companyData.filter(item=>{
         console.log(item.companyName)
     
            return  item.companyName.includes(val)==true
        })
      
        this.setState({
            searchValue:data
        },()=>console.log(this.state.searchValue,"search value"))

    }
   deatail=(name)=>{
      console.log(name)

       this.setState({
        deatail:true,
        add:'',
        
    
       })
   }
   buy=()=>{
    Swal.fire({
    
      icon: 'success',
      title: 'You have successfully buy a token',
      showConfirmButton: false,
      timer: 1500
    })

   }
  render() {
    const {searchValue,deatail,add}=this.state

    return (
      <div    style={{
        width: "100%",
        height: "45.6rem",
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}   >

              <div className='row container-fluid'>
          <h1  className='col-12' style={{color:'white'}}>SEARCH FOR COMPANY</h1>
          </div>
      <div className='container-fluid'>
     
       
       
     <input value={add} placeholder="search company"  onChange={(e)=>this.data("name",e.target.value)} className='form-control col-sm-2 ' />
     
      {
      searchValue.map((item,index)=>{
     
          return<div>
            {add!=''?
              <button style={{background:'transparent', border:'none' ,color:'white'}} onClick={()=>this.deatail(index)} >{item.companyName}</button>:''}
              
      {deatail?<div><h1 style={{color:'white'}}>company name:{item.companyName    }</h1>
        <table style={{color:'white'}} className='table table-hover' border='5  '>
       <tr>
         <th>COMPANY NAME</th>
         <th>ADDRESS</th>
         <th>SINCE</th>
         <th>AVALIBLE TOKEN</th>
         <th>Purchase Token</th>
       </tr>
      <tr><td>{item.companyName}</td>
      <td>{item.address}</td>
      <td>{item.since}</td>
      <td>{item.token}</td>
      <td><button onClick={this.buy} className='btn btn-primary'>Buy Token</button></td>
      </tr>
        </table>
      
      </div>:false}
          </div>
      })}
    
          </div>
      </div>
    );
  }
}
export default User;
