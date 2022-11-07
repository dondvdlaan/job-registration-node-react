import {Method}             from "axios";
import React, { useState }  from "react"
import { useNavigate }      from 'react-router-dom';
import { Api, useApi }      from "../../shared/API";
import { convertDate }      from "../../shared/Assistant";
import { CLOSED, PENDING, 
    REGISTERED, WON }       from "../../shared/Constants";
import { Company }          from "../../types/Company";
import { Job }              from "../../types/Job";
import css                  from "./JobForm.module.css";

interface Props extends Job{
    isEdit      : boolean
    compName    : string
}
/**
 * Component for creating and editing a Job
 */

export const JobForm = (props: Props) =>{
    
    // ******************** Hooks and Constants ********************
    const [jobID, setJobID]                     = useState(props.jobID);
    const [jobTitle, setJobTitle]               = useState(props.jobTitle);
    const [jobDescription, setJobDescription]   = useState(props.jobDescription);
    const [jobDetails, setJobDetails]           = useState(props.jobDetails);
    const [jobStatus, setJobStatus]             = useState(props.jobStatus);
    const [jobClosedReason, setJobClosedReason] = useState(props.jobClosedReason);
    const [jobCloseDate, setJobCloseDate]       = useState(props.jobCloseDate);
    const [compID, setCompID]                   = useState(props.compID);
    const [compName, setName]                   = useState(props.compName);
    const [compStatus, setStatus]               = useState(props.compStatus);
    const navigate                              = useNavigate();
    const [companies, setCompanies]             = useApi<Company[]>("allCompanies");
    

    if(!companies){
        return (<p>Loading Companies...</p>)
      }

    // Job object prepared for sending to DB
    const job = () => ({
      jobID,
      jobTitle,
      jobDescription,
      jobDetails,
      jobStatus,
      jobClosedReason,
      jobCloseDate,
      compID
    })
  

    // ******************** Event handling ********************
    const onJobClosedReason = (e: React.ChangeEvent<HTMLInputElement> ) =>{

        setJobClosedReason(e.target.value);

        setJobCloseDate(()=>convertDate(new Date))
    }
    
    const onFormSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        console.log('Form submitted');

        const [method, path, jobData]:[Method, string, {}] = props.isEdit
        ? ["PUT", `updateJob`, job()]
        : ["POST", `addJob`, job()];

        Api(method,path, ()=>navigate(-2), jobData)
    }

    return(
        <>
        <br />
    <form 
    className   = {css.jobForm}
    onSubmit    = {onFormSubmit}>
        <div className="form-group row">
            <label htmlFor="company" className="col-sm-2 col-form-label">Company</label>
            <div className="col-sm-10">
            <select 
            name            ="company" 
            className       ="form-control" 
            id              ="company" 
            placeholder     ="-----"
            value           ={compID} 
            onChange        ={(e)=>{setCompID(e.target.value)}}
            required
            >
                {(props.isEdit)?
                <option value={compID}>{props.compName}</option>
                :
                <option value="" disabled selected >Select Company</option>
                }
                {companies.map(company =>
                    <option key={company.compID} value={company.compID}>{company.compName}</option>
                )}
            </select>
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="jobTitle" className="col-sm-2 col-form-label">Job Title</label>
            <div className="col-sm-10">
            <input 
            type        ="text" 
            className   ="form-control" 
            id          ="jobTitle" 
            placeholder ="Job Title"
            value       ={jobTitle}
            onChange    ={(e)=>{setJobTitle(e.target.value)}}
            required
            minLength=  {3}
            />
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="jobDescription" className="col-sm-2 col-form-label">Job Description</label>
            <div className="col-sm-10">
            <textarea
            className   ="form-control" 
            id          ="jobDescription" 
            placeholder ="Job Description"
            value       ={jobDescription}
            onChange    ={(e)=>{setJobDescription(e.target.value)}}
            />
            </div>
        </div>
  
        <div className="form-group row">
            <label htmlFor="jobDetails" className="col-sm-2 col-form-label">Job Details</label>
            <div className="col-sm-10">
            <textarea
            className   ="form-control" 
            id          ="jobDetails" 
            placeholder ="Job Details"
            value       ={jobDetails}
            onChange    ={(e)=>{setJobDetails(e.target.value)}}
            />
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="jobStatus" className="col-sm-2 col-form-label">Status</label>
            <div className="col-sm-10">
            <select 
            name        ="jobStatus" 
            className   ="form-control" 
            id          ="jobStatus" 
            placeholder ="-----"
            value       ={jobStatus} 
            onChange    ={(e)=>{setJobStatus(e.target.value)}}
            required
            >
                <option value={""} disabled selected  >Status</option>
                <option value={REGISTERED}>{REGISTERED}</option>
                <option value={PENDING}>{PENDING}</option>
                <option value={WON}>{WON}</option>
                <option value={CLOSED}>{CLOSED}</option>
    
            </select>
            </div>
        </div>
        {jobStatus == CLOSED ?
        
        <div className="form-group row">
            <label htmlFor="jobClosedReason" className="col-sm-2 col-form-label">Reason Closed Lost?</label>
            <div className="col-sm-10">
                <input 
                type        ="text" 
                className   ="form-control" 
                id          ="jobClosedReason" 
                placeholder ="Reason Closed Lost"
                value       ={jobClosedReason}
                onChange    ={(e)=>{onJobClosedReason(e)}}
                required
                />
            </div>
        </div>
        : ""
        }
        <div className="form-group row">
            <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Finished</button>
            </div>
        </div>
    </form>
    </>
    )
}