import { EmployeeForm } from "./EmployeeForm"


export const AddEmployee = () =>{


    return(
        <EmployeeForm
        emplID          = {-1}
        emplFirstName   = ""
        emplLastName    = ""
        emplTel         = ""
        emplEmail       = {undefined}
        compID          = ""
        compName        = ""
        isEdit= {false}
        />
    )
}