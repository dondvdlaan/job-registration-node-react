interface Registered{
    registered: string;
}
interface Pending{
    pending: string;
}
interface Closed{
    closed: string;
}
interface Won{
    won: string;
}
export type JobStatus = Registered |Pending | Closed | Won;


export interface Job{
jobID           : string;     
jobTitle        : string;
jobDescription  : string;
jobDetails      : string;
jobStatus       : string;
jobDate         : string;
compID          : string;
compName        : string;
compStatus      : string;
}