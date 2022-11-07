import { useParams }    from "react-router-dom";
import { useApi }       from "../../shared/API";
import { Job }          from "../../types/Job"
import { JobForm }      from "./JobForm"


/**
 * Component to fetch data from DB and start Jobform
 */
export const UpdateJob = () =>{

// **************** Constants and Hooks **************** 
const { jobID }     = useParams<{jobID: string}>();
const [job, setJob] = useApi<Job[]>(`job/${jobID}`);
let jobCloseDate    = null;

if(!job){return (<p>Loading Jobs...</p>)}

console.log("Update Job ", job)

if(job[0].jobCloseDate){
    // Convert format '2022-11-07T10:59:23.000Z' to '2022-11-07 10:59:23'
    jobCloseDate =  job[0].jobCloseDate.slice(0,10) + " " + job[0].jobCloseDate.slice(11,-5);
    
    console.log("Update Job jobCloseDate", jobCloseDate)

}


    return(
        <JobForm
        jobID           ={job[0].jobID}
        jobTitle        ={job[0].jobTitle}
        jobDescription  ={job[0].jobDescription}
        jobDetails      ={job[0].jobDetails}
        jobStatus       ={job[0].jobStatus}
        jobClosedReason ={job[0].jobClosedReason}
        jobCloseDate    ={jobCloseDate}
        compID          ={job[0].compID}
        compName        ={job[0].compName}
        compStatus      ={job[0].compStatus}
        jobDate         ={job[0].jobDate}

        isEdit          = {true}
        />
    )
}