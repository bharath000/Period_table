
import React, { useState, useEffect } from "react";

//import UserService from "../services/user.service";
//import AuthService from "../services/auth.service"
import QbeService from "../../Services/qbe.service";

import ShowSchemas from "./ShowSchemas";

const ShowTables = (props) => {
    const [content, setContent] = useState("");
    const [showschema, setSchema] = useState(false);
    const [user_role, setUserRole] = useState([]);
    

    const [listtbs, setTbs] = useState([]);
    const [Ep, setEp] = useState([]);
    const [objcount, setObj] = useState({});
    //const currentUser = AuthService.getCurrentUser();
    const state_tables = props.state_tables;
    const tables_list = props.tm;
    const selected_by = props.selected_item

    console.log(state_tables);

   
    
    var obj = {}; var list_tables = [];
    const onChangevalue = (e) => {
        //console.log(e);
        const passwd = e.target.value;
        setUserRole(passwd);
      };

    const getElePro = (id)=>{

        console.log(id);
        
        var ele_data = [];
            QbeService.getElementsProp(id).then(
            (response) => {
              console.log(response.data)
              // setStates(response.data.states);
              ele_data = response.data;
              setEp(ele_data);
              console.log(Object.keys(Ep).length);
            },
            (error) => {
              const _content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
      
                setEp(_content);
                
            }
          );
              
            }
      
      
    
        // useEffect(() => {

        //   fetchData_Elements();
        // }, [])

     // console.log(tables_list);
    if (state_tables.length > 0 && tables_list != ""){
     //  console.log(tables_list);
           
    return (
      
       

        <div className="container c1">
           <hr></hr>
           <div  className="row" >
               <div className ="col-6"><h3>Elements Selected by:{selected_by}</h3>
        {state_tables.map((ad, index) => (
      <div key={index} className="row" >
       <div className="col-3">
    <h5 onClick={() => getElePro(ad)}>{ad}</h5> </div>
    




       
        </div>
      
      
     
    ))}</div>
          <div className ="col-6"><h3>Elements_Properties</h3>
        {Object.keys(Ep).length > 0 && Object.keys(Ep).map((key, i) => (
      <div className="row" >
       <div className="col">
       <li key={i}>
            <span>{key}: {Ep[key]}</span>
          </li> </div>
    




       
        </div>
      
      
     
    ))}</div>
      </div>
      
      <div className = "row">
            { showschema && (<ShowSchemas tblist  = {tables_list.tables} schema_state = {showschema} sel_tb = {listtbs} count = {objcount} username = {props.username} passwd = {props.passwd} dbname = {props.dbname}/>)

            }
      </div>
      </div>
      

      


    )}
    else{
        return(<div className="container c1">
          <h3>Elements </h3>
        </div>)
    }

    
  };



  
  export default ShowTables;
