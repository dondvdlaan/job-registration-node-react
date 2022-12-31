import { useParams }    from "react-router-dom";
import { useApi }       from "../../shared/API";
import { Company }      from "../../types/Company";
import { CompanyForm }  from "./CompanyForm";

/* 
*   Component to start CompanyForm to update data of individual company
*
*   @input  none
*   @return CompanyForm tsx :   CompanyForm with parameters initiated with
*                               values out of DB
*/
export const UpdateComp = () =>
{
    // Constants and Hooks
    const { idComp }    = useParams<{idComp: string}>();
    const [company]     = useApi<Company>(`company/${idComp}`);

    console.log("company ", company)

    // Wait till data from DB arrived
    if(!company){return (<p>Loading company...</p>)}


        return(
            <CompanyForm
            compID         = {company.compID}
            compName       = {company.compName}
            compType       = {company.compType}
            compNote       = {company.compNote}
            compStatus     = {company.compStatus}
            isEdit         = {true}
            />
        )
}