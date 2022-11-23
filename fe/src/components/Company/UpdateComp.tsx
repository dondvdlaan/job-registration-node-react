import { useParams }    from "react-router-dom";
import { useApi }       from "../../shared/API";
import { Corporation }  from "../../types/Company";
import { CompanyForm }  from "./CompanyForm";

/* 
*   Vomponent to start CompayForm to update data of individual company
*
*   @input  none
*   @return CompanyForm tsx :   CompanyForm with parameters initiated with
*                               values out of DB
*/
export const UpdateComp = () =>
{
    // Constants and Hooks
    const { idComp }        = useParams<{idComp: string}>();
    console.log("id ", idComp)
    const [corporation] = useApi<Corporation[]>(`company/${idComp}`);

    // Wait till data from DB arrived
    if(!corporation){return (<p>Loading Corporation...</p>)}


        return(
            <CompanyForm
            compID         = {corporation[0].compID}
            compName       = {corporation[0].compName}
            compType       = {corporation[0].compType}
            compNote       = {corporation[0].compNote}
            compStatus     = {corporation[0].compStatus}
            emplID         = {corporation[0].emplID}
            emplFirstName  = {corporation[0].emplFirstName}
            emplLastName   = {corporation[0].emplLastName}
            emplTel        = {corporation[0].emplTel}
            emplEmail      = {corporation[0].emplEmail}
            isEdit         = {true}
            />
        )
}