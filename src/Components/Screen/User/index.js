import React,{Component} from "react";
import * as firebase from "firebase/app";
import Background from "../../images/backgroud.jpg";


class User extends Component {
    constructor(){
        super()
        this.state={
             companyData:[],
             searchValue:[],
             deatail:false
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
        
        console.log(value)
        const{companyData}=this.state
       let data= companyData.filter(item=>{
            return  item.companyName.includes(value)==true
        })
        this.setState({
            searchValue:data
        })

    }
   deatail=(name)=>{
       alert('hello')
       this.setState({
        deatail:true
       })
   }
  render() {
    const {searchValue,deatail}=this.state
    console.log(searchValue)
    return (
      <div 
>
              <div className='row container-fluid'>
          <h1  className='col-12' style={{color:'white'}}>SEARCH FOR COMPANY</h1>
          </div>
      <div className='container-fluid'>
     
       
       
     <input  onChange={(e)=>this.data("name",e.target.value)} className='form-control col-sm-2 ' />
      {searchValue.map((item,index)=>{
          return<div>
              <a onClick={this.deatail} href>{item.companyName}</a>
              
      {deatail?<div><h1>{item[index].companyName       }</h1></div>:false}
          </div>
      })}
    
          </div>
      </div>
    );
  }
}
export default User;
