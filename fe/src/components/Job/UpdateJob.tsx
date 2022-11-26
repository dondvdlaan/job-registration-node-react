import { useParams }    from "react-router-dom";
import { useApi }       from "../../shared/API";
import { Job, JobWEmployee }          from "../../types/Job"
import { JobForm }      from "./JobForm"


/**
 * Component to fetch data from DB and start Jobform
 */
export const UpdateJob = () =>{

// **************** Constants and Hooks **************** 
const { jobID }                 = useParams<{jobID: string}>();
const [job, setJob]             = useApi<JobWEmployee>(`job/${jobID}`);
let jobCloseDate                = null;

if(!job){return (<p>Loading Jobs...</p>)}

console.log("Update Job ", job)

if(job.jobCloseDate){
    // Convert format '2022-11-07T10:59:23.000Z' to '2022-11-07 10:59:23'
    jobCloseDate =  job.jobCloseDate.slice(0,10) + " " + job.jobCloseDate.slice(11,-5);
    
    console.log("Update Job jobCloseDate", jobCloseDate)
}

    return(
        <JobForm
        jobID           = {job.jobID}
        jobTitle        = {job.jobTitle}
        jobDescription  = {job.jobDescription}
        jobDetails      = {job.jobDetails}
        jobStatus       = {job.jobStatus}
        jobNote         = {job.jobNote}
        jobContract     = {job.jobContract}
        jobClosedReason = {job.jobClosedReason}
        jobCloseDate    = {jobCloseDate}
        jobDate         = {job.jobDate}
        
        compID          = {job.compID}
        compName        = {job.compName}
        compStatus      = {job.compStatus}
        
        emplID          = {job.emplID}
        emplFirstName   = {job.emplFirstName}
        emplLastName    = {job.emplLastName}
        
        isEdit          = {true}
        />
    )
}