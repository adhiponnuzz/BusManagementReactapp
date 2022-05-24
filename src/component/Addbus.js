import axios from 'axios'
import React, { useState } from 'react'

const Addbus = () => {
    var [route,setRoute]=useState("")
    var [busname,setBusname]=useState("")
    var [regno,setRegno]=useState("")
    var [ownername,setOwnername]=useState("")
    var [contactno,setContactno]=useState("")
    const subData=()=>{
        const data={"Route":route,"Busname":busname,"Regno":regno,"Ownername":ownername,"contactno":contactno}
        console.log(data)

        
    }
    
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Route</label>
                    <input onChange={(e)=>{setRoute(e.target.value)}} placeholder="Enter Route" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Bus Name</label>
                    <input onChange={(e)=>{setBusname(e.target.value)}} placeholder="Enter Busname" type="text" className="form-control"/>
                </div>
                
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Bus RegNo</label>
                    <input onChange={(e)=>{setRegno(e.target.value)}} placeholder="Enter BusRegno" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Owner Name</label>
                    <input onChange={(e)=>{setOwnername(e.target.value)}} placeholder="Enter OwnerName" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Contact Number</label>
                    <input onChange={(e)=>{setContactno(e.target.value)}} placeholder="Enter ContactNo" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-warning">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>






    </div>
  )
}

export default Addbus