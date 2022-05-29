import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
   var [viewlist,setviewlist]=useState([])
   var[loadstatus,setloadstatus]=useState(true)

   axios.get("http://localhost:4000/api/view").then((response)=>{
     console.log(response.data)
     setviewlist(response.data)
     setloadstatus(false)



   })
   
   return (
    <div>
        <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">route</th>
      <th scope="col">busname</th>
      <th scope="col">regno</th>
      <th scope="col">ownername</th>
      <th scope="col">contactno</th>
    </tr>
  </thead>
  {loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:<tbody>
    {viewlist.map((value,key)=>{
        return <tr>
      
        <td>{value['route']}</td>
        <td>{value.busname}</td>
        <td>{value.regno}</td>
        <td>{value.ownername}</td>
        <td>{value.contactno}</td>
      </tr>


    })}
    
  </tbody>}
</table>


                        </div>



                    </div>


                </div>



            </div>


        </div>




    </div>
  )
}

export default View