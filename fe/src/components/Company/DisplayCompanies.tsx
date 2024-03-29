import { useApi } from "../../shared/API";
import { Corporation } from "../../types/Company";
import { Companies } from "./Companies"


/*
*  Main function to list companies from DB.
*
* @return tsx : Call component Companies
*/
export const DisplayCompanies = () =>{

  // Retrieve companies from DB
  const [corporations] = useApi<Corporation[]>("allCompanies");

  // Wait till company data arrived
  if (!corporations) {
    return (<p>Loading Companies...</p>)
  }

    return(
        <Companies
        corporations  = {corporations}
        />
    )
}