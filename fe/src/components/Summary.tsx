import { useApi }       from "../shared/API";
import {  APPROACHED, 
          CLOSED, 
          PENDING, 
          REGISTERED, 
          WON}  from "../shared/Constants";
import { ItemSearch } from "../shared/ItemSearch";
import { Company }      from "../types/Company";
import { Job }          from "../types/Job";


/**
 * Component to summarize the status of all jobs
 */
export const Summary= () =>{

  // ***************** Hooks and costumHooks *****************
  const [jobs, setJobs]           = useApi<Job[]>("allJobs");
  const [companies, setCompanies] = useApi<Company[]>("allCompanies");

  if(!jobs || !companies){
    return (<p>Loading...</p>)
  }

return(
  <>
    <br />
    <h3>Summary:</h3  > 
    <div className="container">
      <div className="row text-center bg-light">
        <div className="col">
        </div>
        <div className="col-2">
          Total Applied
        </div>
        <div className="col-2">
          Registered
        </div>
        <div className="col-2">
          Pending
        </div>
        <div className="col-2">
          Closed Lost
        </div>
        <div className="col-2">
          Won
        </div>
      </div>
      <div className="row text-center ">
        <div className="col-2 bg-light">
          Jobs
        </div>
        <div className="col-2 text-center     ">
            {jobs.length} 
        </div>
        <div className="col-2">
          {jobs.filter(job => job.jobStatus === REGISTERED).length}
        </div>
        <div className="col-2">
          {jobs.filter(job => job.jobStatus === PENDING).length}
        </div>
        <div className="col-2">
          {jobs.filter(job => job.jobStatus === CLOSED).length}
        </div>
        <div className="col-2">
          {jobs.filter(job => job.jobStatus === WON).length}
        </div>
      </div>
      <br />
      <div className="row text-center bg-light">
        <div className="col-2">
        </div>
        <div className="col-2">
          Total
        </div>
        <div className="col-2">
          Registered
        </div>
        <div className="col-2">
          Approached
        </div>
        <div className="col-2">
        </div>
      </div>
      <div className="row text-center ">
        <div className="col-2 bg-light">
          Companies  
        </div>
        <div className="col-2">
        {companies.length}
        </div>
        <div className="col-2">
        {companies.filter(company => company.compStatus === REGISTERED).length}
        </div>
        <div className="col-2">
        {companies.filter(company => company.compStatus === APPROACHED).length}
        </div>
        <div className="col-2">
        </div>
      </div>
    </div>
  </>
  )
}