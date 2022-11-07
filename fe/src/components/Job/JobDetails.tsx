import {  useNavigate, useParams }  from 'react-router-dom';
import {Method}                     from "axios";
import { Api, useApi }              from '../../shared/API';
import { Job }                      from '../../types/Job';
import { CLOSED } from '../../shared/Constants';

/**
 * Component to show all details of a sngle job
 */
export const JobDetails = () => {

    // ************** Constants and Hooks **************
    const { jobID } = useParams<{jobID: string}>();
    const job       = useApi<Job[]>(`job/${jobID}`)[0];
    const navigate  = useNavigate();
    
    // Wait till job arrived
    if(!job){return (<p>Loading Job...</p>)}

    // ************** Event hamdling ************** 
    const onUpdate = ()=> {
      navigate(`/UpdateJob/${jobID}`);
    }

    const onDelete = ()=> {
      const method: Method = "DELETE";
      const path: string = `deleteJob/${jobID}`;

      Api(method,path, ()=>navigate('/allJobs'), {})
      }

    return (
    <>
      <h3>Job Details</h3>
      <div className="container">
        <div className="row">
          <div className="col">
            Job Title
          </div>
          <div className="col-5">
            {job[0].jobTitle}
          </div>
          <div className="col">
            Date
          </div>
          <div className="col">
          {job[0].jobDate.slice(0,10)}
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            Description
          </div>
          <div className="col-5">
            {job[0].jobDescription}
          </div>
          <div className="col">
            Company
          </div>
          <div className="col">
            {job[0].compName}
          </div>
        </div>
        
        <div className="row">
          <div className="col">
            Details
          </div>
          <div className="col-5" >
            {job[0].jobDetails}
          </div>
          <div className="col">
            Status
          </div>
          <div className="col">
            {job[0].jobStatus}
          </div>
        </div>

        {job[0].jobStatus == CLOSED ?
          <div className="row">
            <div className="col">
              Closed Lost Reason
            </div>
            <div className="col-5" >
              {job[0].jobClosedReason}
            </div>
            <div className="col">
              Close Date
            </div>
            <div className="col">
              {job[0].jobCloseDate ? job[0].jobCloseDate.slice(0,10) : ""}
            </div>
          </div>
        : ""
        }
        <br />
        
        <div className="row">
          <div className="col">
            <button 
              type="button" 
              onClick={onUpdate} 
              className="btn btn-primary btn-sm">
                Update
            </button>
            <button 
              type="button" 
              onClick={onDelete} 
              className="btn btn-warning btn-sm">
                Delete
            </button>
          </div>
        </div>
      </div>
  </>
  )
}