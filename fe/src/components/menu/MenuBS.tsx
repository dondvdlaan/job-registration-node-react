import { ReactElement } from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

interface Props {
  children: ReactElement;
}

export default function MenuBS(props: Props): ReactElement {


  return (
    <>
    <Navbar bg="primary" collapseOnSelect expand="sm">
      <Container>  
        <Navbar.Brand href="/">JOBS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
          <Nav className="me-auto">
            <Nav.Link href="/summary">Summary</Nav.Link >  
            <NavDropdown title="JOBS" id="nav-dropdown">
              <NavDropdown.Item href="/activeJobs" >Active Jobs</NavDropdown.Item>
              <NavDropdown.Item href="/lostJobs" >Lost Jobs</NavDropdown.Item>
              <NavDropdown.Item href="/lostJobs" >New Jobs</NavDropdown.Item>
            </NavDropdown>
        
        {/* <Dropdown>
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
        </li> */}
          </Nav>
        </Navbar.Collapse>
      </Container>                                     
    </Navbar>

      <div className="container">{props.children}</div>
    </>
  );
}