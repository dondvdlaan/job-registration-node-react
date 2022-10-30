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

if( job === undefined){return (<p>Lade...</p>)}

    return(
        <JobForm
        jobID           ={job[0].jobID}
        jobTitle        ={job[0].jobTitle}
        jobDescription  ={job[0].jobDescription}
        jobDetails      ={job[0].jobDetails}
        jobStatus       ={job[0].jobStatus}
        compID          ={job[0].compID}
        compName        ={job[0].compName}
        compStatus      ={job[0].compStatus}
        jobDate         ={job[0].jobDate}

        isEdit          = {true}
        />
    )
}