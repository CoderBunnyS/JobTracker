import React from 'react';
import axios from "axios"

var mongoURI = "mongodb+srv://TrackerAdmin:TrackerAdminPassword@TrackerDatabase.euzmb.mongodb.net/TrackerDatabase?retryWrites"
//'http://localhost:4000/jobs/delete-job/'

function DeleteJob(props)  {

    let DeleteJob = e => {
     //e.preventDefault()
     console.log("CLICKED!!!!!!!!")
     console.log(`${mongoURI}${this}`)
     axios.delete(`${mongoURI}${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data)
        console.log('Job successfully deleted')
        window.location.reload(false);
        // this.componentDidMount()
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Job List 
    this.props.history.push('/job-list')
  }


    //  axios.delete(`${mongoURI}delete-job/${props.id}`).then(res=>{console.log(res)
    //  alert("Deleted")});
     //window.location.reload()
     
   
     return (
       <div>
         <div>
           {/* <button onClick={deleteButton}>button text</button> */}
           
           <button id='deleteButton' className="delete-btn btn btn-danger btn-sm" onClick={DeleteJob} />
           
         </div>
       </div>
     );
    }

    export default DeleteJob