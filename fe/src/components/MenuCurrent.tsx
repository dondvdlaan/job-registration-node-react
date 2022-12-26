import { ReactElement } from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

interface Props {
  children: ReactElement;
}

export default function Menu(props: Props): ReactElement {

// *** Constants and Variables ***
// const navLinkClassname = ({ isActive }: { isActive: boolean }) =>
//     `navbar-item ${isActive ? "is-active" : ""}`;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav nav-pills" >   
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/summary"     >Summary      </NavLink >  
        </li>  

        <Dropdown>
          <li className="nav-item dropdown">
            <Dropdown.Toggle variant="pills" id="dropdown-basic">
              Jobs
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item >
                <NavLink className="nav-link" to="/activeJobs"  >Active Jobs  </NavLink >  
              </Dropdown.Item>
              <Dropdown.Item >
                <NavLink className="nav-link" to="/lostJobs"    >Lost Jobs    </NavLink >  
              </Dropdown.Item>
              <Dropdown.Item >
                <NavLink className="nav-link" to="/addJob"      >New Job      </NavLink >  
              </Dropdown.Item>
            </Dropdown.Menu>
          </li>   
        </Dropdown>
        
        <Dropdown>
          <li className="nav-item dropdown">
            <Dropdown.Toggle variant="pills" id="dropdown-basic">
              Companies
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item >
                  <NavLink className="nav-link"  to="/companies"   >Companies    </NavLink >  
              </Dropdown.Item>
              <Dropdown.Item >
                  <NavLink className="nav-link"  to="/addCompany"  >Add Company  </NavLink > 
              </Dropdown.Item>
            </Dropdown.Menu>
          </li>   
        </Dropdown>

        <li className="nav-item">
          <NavLink className="nav-link" to="/addEmployee" >Add Employee </NavLink > 
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/partners"    >Partners     </NavLink > 
        </li>

        </ul>                                      
      </nav>

      <div className="container">{props.children}</div>
    </>
  );
}