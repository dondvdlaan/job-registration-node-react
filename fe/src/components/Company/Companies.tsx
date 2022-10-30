import { ChangeEvent, useRef, useState }     from "react";
import Badge            from 'react-bootstrap/Badge'
import { Api }          from "../../shared/API";
import { Corporation }  from "../../types/Company";
import { Pagination }   from "../Pagination";
import { Method }       from "axios";
import { useNavigate }  from 'react-router-dom';
import { useSortData }  from "../../shared/SortData";
import { SearchOutline } from 'react-ionicons'

/**
*  Main function to display all companies with employee(1 per company) from DB
*
* @input  Corporation []  : Companies and Emplees into one array
* @return tsx 
*/
export const Companies = (props: {corporations: Corporation[]}) => {

  // *************** Constants and variables ***************
  const [page, setPage]                   = useState(1);
  const navigate                          = useNavigate();
  const [items, setItems]                 = useState<Corporation[]>(props.corporations);

  const {sortedItems, onSort, sortConfig} = useSortData(items);
  const [itemSearched, setItemSearched]   = useState("");
  const [displaySearch, setDisplaySearch] = useState<Boolean>(false);

  if(!sortedItems) return (<p>Loading items...</p>)

  const maxRowsPerPage      = 10;
  const minNrOfChararcters  = 0;

  /// *** Components ***
  const SearchCompany = () =>(
    <div className="panel-block">
    <p className="control has-icons-right">
      <input
        value={itemSearched}
        onChange={onSearch}
        type="text"
        className="input"
        autoFocus
      />
      <span className="searchSymbol">
        {/* <SearchOutline
            color={'#2f5b83'} 
            title={""}
            height="25px"
            width="25px"
        /> */}
            <i className="searchSymbol" />
      </span>
    </p>
  </div>
  )

  const NoRowsFound = () =>(
    <p>No Rows found</p>
  )

  // *************** Event handling ***************
  /**
   * Set page for Pagination
   */
  const onSetPage = (page   : number) => setPage(page);

  /**
   * Navigate to details page of Company
   */
  const onUpdate  = (compID : string) => {
    navigate(`/updateComp/${compID}`);
  }

  /**
   * Delete company from DB
   */
  const onDelete  = (compID : string) => {

    //Constants and variables
    const method: Method = "DELETE";
    const path: string = `deleteCompany/${compID}`;
    
    // Callback to refresh page after API
    Api(method, path, () => window.location.reload(), {})
  }

  /**
   * Search through companies
   */
  const onSearch = (e: ChangeEvent<HTMLInputElement>) =>{

    // Capture input value
    const inputValue = e.target.value;

    // Pass to useState
    setItemSearched(inputValue);
    
    // If minimum number of char entered, start searching
    if (inputValue.length >= minNrOfChararcters){
        
        // Compare first characters of item name in array with inputValue
        let result = props.corporations.filter(item => 
        item.compName.slice(0,inputValue.length).toLowerCase() == 
        inputValue.toLowerCase());

        // If input is empty, show full list of companies
        if (inputValue.length == 0) result = props.corporations;
        
        // Pass result to useState
        setItems(result);
    }
  }

  /**
   * Displays onSearch window
   */
  const onDisplaySearch = ()=>{

    // At reset of onSearch, empty imput field and restore original list
    if(displaySearch){
      setItems(props.corporations);
      setItemSearched("");
    }
    
    // Toggle for SearchCompany bar
    setDisplaySearch(!displaySearch)
    }

  // *************** Functions ***************
  /**
   * Function to check which sorting direction is chosen and which className to use
   * for sorting companies
  */
  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {return;}
    return sortConfig.fieldname === name ? sortConfig.direction : undefined;
  };

  // Rows per Page to be displayed
  const rowsOnThisPage = sortedItems.slice((page - 1) * maxRowsPerPage,
                                      page * maxRowsPerPage);

  return (
    <>
      <div className="mx-0 p-0 container.fluid">
      <table className="table table-hover table-light">
      <caption>Companies</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              {displaySearch &&<SearchCompany />}
              <button 
                type="button" 
                className={getClassNamesFor("compName")?`button button1 ${getClassNamesFor("compName")}`:"button button1" } 
                onClick={() => onSort('compName')} >
                  Company
              </button>
              <SearchOutline
                color={'#2f5b83'} 
                title={""}
                height="25px"
                onClick={onDisplaySearch}
                width="25px"
              />
            </th>
            <th scope="col">
              <button 
              type="button" 
              className={getClassNamesFor("compType")?`button button1 ${getClassNamesFor("compType")}`:"button button1" }
              onClick={() => onSort('compType')} >
                Type
              </button>
            </th>
            <th scope="col">
              <button 
              type="button" 
              className={getClassNamesFor("compStatus")?`button button1 ${getClassNamesFor("compStatus")}`:"button button1" } 
              onClick={() => onSort('compStatus')} >
                Status
              </button>
            </th>
            <th scope="col">Staff</th>
            <th scope="col">Tel</th>

          </tr>
        </thead>
        <tbody>
          {rowsOnThisPage.length == 0 ? 
            <NoRowsFound />
          :
          <>
            {rowsOnThisPage.map((row: Corporation, index: number) =>
              <tr key={row.compID}>
                <th scope="row">

                  {/* // Numbering of rows */}
                  {(index + 1) + (page - 1) * maxRowsPerPage }{' '}

                  {/* Badges Delete and Update */}
                  <Badge onClick={compID => onDelete(row.compID)} pill bg="warning">Del</Badge>
                  <Badge onClick={compID => onUpdate(row.compID)} pill bg="secondary">Upd</Badge>{' '}
                </th>
                <td>{row.compName} </td>
                <td>{row.compType} </td>
                <td>{row.compStatus} </td>
                <td>{row.emplFirstName} {row.emplLastName} </td>
                <td>{row.emplTel}</td>
              </tr>
            )}
          </>
          }
        </tbody>
      </table>

      <br />
      <Pagination
        currentPage     = {page}
        rows            = {sortedItems.length}
        maxRowsPerPage  = {maxRowsPerPage}
        onSetPage       = {onSetPage}
      />
    </div>
    </>
  )
}