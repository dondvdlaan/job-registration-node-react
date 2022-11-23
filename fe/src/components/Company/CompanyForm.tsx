import React, { useState }  from "react"
import { useNavigate }      from 'react-router-dom';
import { api, 
        ApiSimplified }     from "../../shared/API";
import { APPROACHED, 
        CONSULTANT, 
        ENDUSER, 
        IT_OEM, 
        PARTNER, 
        RECRUITER, 
        REGISTERED }        from "../../shared/Constants";
import { Corporation }      from "../../types/Company";
import css                  from "./CompanyForm.module.css";
import {Method}             from "axios";


interface Props extends Corporation {
    isEdit  : boolean
    
}
/**
 *  Component to cretae or update a company
 * 
 * @input   props
 * @output  tsx
 */
export const CompanyForm = (props: Props) =>{

    // *********** Hooks and Constants ***********
    const [compID]                          = useState(props.compID);
    const [compName, setCompName]           = useState(props.compName);
    const [compType, setCompType]           = useState(props.compType);
    const [compNote, setCompNote]           = useState(props.compNote);
    const [compStatus, setCompStatus]       = useState(props.compStatus);
    const [emplID]                          = useState(props.emplID);
    const [emplFirstName, setEmplFirstName] = useState(props.emplFirstName);
    const [emplLastName, setEmplLastName]   = useState(props.emplLastName);
    const [emplTel, setEmplTel]             = useState(props.emplTel);
    const [emplEmail, setEmplEmail]         = useState(props.emplEmail);

    const navigate = useNavigate();

    // Prepare payloads for API
    const company = () =>({
        compID,
        compName,
        compType,
        compNote,
        compStatus,
    })

    const employee = () =>({
        emplID,
        emplFirstName,
        emplLastName,
        emplTel,
        emplEmail,
    })
    
    // *********** Event handling ***********
    const onFormSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        console.log('Form submitted');

        // Send first Company request, then Employee request to DB
        const [method, path]:[Method, string] = props.isEdit
        ? ["PUT", `updateCompany`]
        : ["POST", `addCompany`];

        ApiSimplified(method, path, company())
        .then(res =>
        {
          // If reply is ok, add Employee is present, continue  
          if((res.status === 200) && emplID){

            api("PUT","updateEmployee", ()=>navigate('/companies'), employee())
          } 
          else navigate('/companies');
        })
    }

    return(
        <>
    <form 
    className   ={css.companyForm}
    onSubmit    ={onFormSubmit}>
        <fieldset>
        <legend 
            className   ="font-weight-bold" > 
            {props.isEdit?"Update Company":"Add Company"}
        </legend>
        <div className="form-group row">
            <label htmlFor="compName" className="col-sm-3 col-form-label">Company Name</label>
            <div className="col-sm-9">
            <input 
            type        ="text" 
            className   ="form-control" 
            id          ="compName" 
            placeholder ="Company name"
            required
            value       ={compName}
            onChange    ={(e)=>{setCompName(e.target.value)}}
            />
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="compType" className="col-sm-3 col-form-label">Company Type</label>
            <div className="col-sm-9">
                <select
                    className   ="form-control" 
                    id          ="compType" 
                    placeholder ="Company type"
                    value       ={compType}
                    onChange    ={(e)=>{setCompType(e.target.value)}}
                    required
                >
                    <option value={''}  disabled selected >Company Type</option>
                    <option value={PARTNER}>{PARTNER}</option>
                    <option value={RECRUITER}>{RECRUITER}</option>
                    <option value={ENDUSER}>{ENDUSER}</option>
                    <option value={CONSULTANT}>{CONSULTANT}</option>
                    <option value={IT_OEM}>{IT_OEM}</option>
                </select>
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="compType" className="col-sm-3 col-form-label">Note</label>
            <div className="col-sm-9">
            <input 
            type        ="text" 
            className   ="form-control" 
            id          ="compNote" 
            placeholder ="Note"
            value       ={compNote}
            onChange    ={(e)=>{setCompNote(e.target.value)}}
            />
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="compStatus" className="col-sm-3 col-form-label">Status</label>
            <div className="col-sm-9">
            <select 
            name            ="compStatus" 
            className       ="form-control" 
            id              ="compStatus" 
            placeholder     ="-----"
            value           ={compStatus} 
            onChange        ={(e)=>{setCompStatus(e.target.value)}}
            required
            >
                <option value={''}  disabled selected >Status</option>
                <option value={REGISTERED}>{REGISTERED}</option>
                <option value={APPROACHED}>{APPROACHED}</option>
            </select>
            </div>
        </div>

        {/* // Check if Employee has been initiated to update data, else null */}
        {(emplID !== "") && (emplID !== null) &&(
        <>
        <div className="form-group row">
            <label htmlFor="emplFirstName" className="col-sm-3 col-form-label">First name</label>
            <div className="col-sm-9">
            <input 
            type        ="text" 
            className   ="form-control" 
            id          ="emplFirstName" 
            placeholder ="First name"
            value       ={emplFirstName}
            onChange    ={(e)=>{setEmplFirstName(e.target.value)}}
            />
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="emplLastName" className="col-sm-3 col-form-label">Last Name</label>
            <div className="col-sm-9">
            <input 
            type        ="text" 
            className   ="form-control" 
            id          ="emplLastName" 
            placeholder ="Last name"
            value       ={emplLastName}
            onChange    ={(e)=>{setEmplLastName(e.target.value)}}
            />
            </div>
        </div>
        
        <div className="form-group row">
            <label htmlFor="emplTel" className="col-sm-3 col-form-label">Tel nr.</label>
            <div className="col-sm-9">
            <input 
            type        ="text" 
            className   ="form-control" 
            id          ="emplTel" 
            placeholder ="Tel nr."
            value       ={emplTel}
            onChange    ={(e)=>{setEmplTel(e.target.value)}}
            />
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="emplEmail" className="col-sm-3 col-form-label">Email</label>
            <div className="col-sm-9">
            <input 
            type        ="text" 
            className   ="form-control" 
            id          ="emplEmail" 
            placeholder ="Email"
            value       ={emplEmail}
            onChange    ={(e)=>{setEmplEmail(e.target.value)}}
            />
            </div>
        </div>
        </>
        )}
        {/* // End check Employee initiated */}

        <div className="form-group row">
            <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Finished</button>
            </div>
        </div>
        </fieldset>
    </form>
    </>
    )
}