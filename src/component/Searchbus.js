import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Searchbus = () => {

    const deleteApicall=(id)=>{

        const data={"_id":id}
        console.log(data)
        axios.post("http://localhost:4000/api/delete",data).then((Response)=>{
            if(Response.data.status=="success")
            {
                alert("successfully deleted")
            }
            else{
                alert("error in deletion")
            }


        })
    }



    var [route,setRoute]=useState("")
    const [data,setData]=useState([{"busname":"","regno":"","ownername":""," contactno":""}])
  
    const subData=()=>{
        const data={"route":route}
        console.log(data)
        axios.post("http://localhost:4000/api/search",data).then((Response)=>{
            console.log(Response.data)
            setData(Response.data)

        })
      
       


    }
    
  return (
    <div>
        <Header/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Route</label>
                    <input onChange={(e)=>{setRoute(e.target.value)}}  placeholder="Enter Route" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={subData} className="btn btn-warning">SEARCH</button>
                </div>
            </div>
            {data.map((value,key)=>{
                return <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">Bus Name</label>
                        <input  placeholder="Enter BusName " value={value.busname} type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">RegNo</label>
                        <input placeholder="Enter Regno " value={value.regno} type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">OwnerName</label>
                        <input placeholder="Enter OwnerName " value={value.ownername} type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">ContactNo</label>
                        <input placeholder="Enter contactno " value={value.contactno} type="text" className="form-control"/>

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button  onClick={()=>{deleteApicall(value._id)}} className="btn btn-danger">DELETE</button>
                </div>
                    





                </div>
            })}
            
            
        </div>
    </div>
</div>





    </div>
  )
}

export default Searchbus