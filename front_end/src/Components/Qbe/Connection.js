import React, { useState, useRef, useEffect } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Select from 'react-select'
import CheckButton from "react-validation/build/button";

import { Route , withRouter} from 'react-router-dom';
import QbeService from "../../Services/qbe.service";
import ShowTables from "./ShowTables"
const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

  const Connection = (props) =>{

    const form = useRef();
    const checkBtn = useRef();
  
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [database, setDatabase] = useState("");
    const [tables_names, setTables] = useState([]);
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const [showtables, setShowTables] = useState(false);
    const [showschema, setSchema] = useState(false);
    const [ele, setEle] = useState([]);
  
    const [select, setSelect] = useState("");
    const [states, setStates] = useState([]);
    const [key, setKey] = useState("");
    const [classes, setClasses] = useState([]);
    const [blocks, setBlocks] = useState([]);
    const [groups, setGroups] = useState([]);
    const [periods, setPeriods] = useState([]);

    const onChangeselect = (e) =>{
      const sel = e.value;
      const ke = e.key;
      setSelect(sel);
      setKey(ke);
      const fetchData_Elements = () => {
        var ele_data = [];
          QbeService.getElements(ke, sel).then(
          (response) => {
            console.log(response.data.ele)
            // setStates(response.data.states);
            ele_data = response.data.ele;
            setEle(ele_data);
          },
          (error) => {
            const _content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
    
              setEle(_content);
              
          }
        );
            
          }
      fetchData_Elements();
      console.log(e);
    }
    console.log(select);
  const onChangeUser = (e) => {
    const user = e.target.value;
    setUser(user);
  };

  const onChangePassword = (e) => {
    const passwd = e.target.value;
    setPassword(passwd);
  };

  const onChangeDatabase = (e) => {
    const database = e.target.value;
    setDatabase(database);
  };


  const handleConnection = (e) => {
    e.preventDefault();
   
    setMessage("");
    setSuccessful(false);
    //setShowTables(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      var tables_arr = [];
      //console.log(checkBtn.current.context._errors.length);
        //const user = QbeService.getCurrentUser();
      QbeService.getTabledb(user, password, database).then(
        
        (tables_names) => {
            //console.log(tables_names.data.data);
            
            //console.log(tables_names.data.data.tables);
            if(tables_names.data.data.tables)
            { 
              setTables(tables_names.data.data);
                setShowTables(true);
                //console.log("jjjj");
            }
            else{
              setTables(tables_names.data.data.tables);
              
              setShowTables(false);
              alert('Invalid Credentials');
              window.location.reload();
            }
            // const user = AuthService.getCurrentUser();
            // //props.history.push("/"+user.role[0].authority.slice(5));
            // window.location.href = "/"+ user.role[0].authority.slice(5);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
          setShowTables(false);
        }
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
    var s_data = [];
    var c_data = [];
    var b_data = [];
    var g_data = [];
    var p_data = [];
    await QbeService.getStates().then(
      (response) => {
        console.log(response.data.states)
        // setStates(response.data.states);
         s_data = response.data.states;
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

          setStates(_content);
      }
    );
    await QbeService.getClases().then(
      (response) => {
        // console.log(response.data.states)
        // setClasses(response.data.classes);
        c_data = response.data.classes;
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

          setClasses(_content);
      }
    );
    await QbeService.getBlocks().then(
      (response) => {
        // console.log(response.data.blocks)
        // setBlocks(response.data.blocks);
         b_data = response.data.blocks;

      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

          setBlocks(_content);
      }
    );
    await QbeService.getGroups().then(
      (response) => {
        // console.log(response.data.states)
        // setGroups(response.data.groups);
         g_data = response.data.groups;
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

          setGroups(_content);
      }
    );
    await QbeService.getPeriods().then(
      (response) => {
        // console.log(response.data.states)
        // setPeriods(response.data.periods);
         p_data = response.data.periods;
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

          setPeriods(_content);
      }
    );
   
    setStates(s_data);
    // console.log(states);
    setClasses(c_data);
    setBlocks(b_data);
    setGroups(g_data);
    setPeriods(p_data);
    };

    fetchData();

  }, []);
  return (
    <div className="jumbotron">
      <div className="container c1">
        

        <Form onSubmit={handleConnection} ref={form}>
          <h3>Search</h3>
          {!successful && (
            <div className="row c1">
              <div className="col">
              <Select
                value={select}
                onChange={onChangeselect}
                placeholder = "ss"
              //   clearable={this.state.clearable}
              //   searchable={this.state.searchable}
              //   //labelKey={'name'}
              //  // valueKey={'code'}
                options={states.map(t=>({value: t, label: t, key: "standard_state"}))}                  
            />
              </div>

              <div className="col">
               
              <Select
                value={select}
                onChange={onChangeselect}
                // placeholder = "class"
              //   clearable={this.state.clearable}
              //   searchable={this.state.searchable}
              //   //labelKey={'name'}
              //  // valueKey={'code'}
                options={classes.map(t=>({value: t, label: t, key: "classification"}))}                  
            />
              </div>

              <div className="col">
              <Select
                value={select}
                onChange={onChangeselect}
                placeholder = "block"
              //   clearable={this.state.clearable}
              //   searchable={this.state.searchable}
              //   //labelKey={'name'}
              //  // valueKey={'code'}
                options={blocks.map(t=>({value: t, label: t, key: "block"}))}                  
            />
              </div>
              <div className="col">
              <Select
                value={select}
                onChange={onChangeselect}
                placeholder = "group"
              //   clearable={this.state.clearable}
              //   searchable={this.state.searchable}
              //   //labelKey={'name'}
              //  // valueKey={'code'}
                options={groups.map(t=>({value: t, label: t, key: "group"}))}                  
            />
              </div>
              <div className="col">
              <Select
                value={select}
                onChange={onChangeselect}
                placeholder = "period"
              //   clearable={this.state.clearable}
              //   searchable={this.state.searchable}
              //   //labelKey={'name'}
              //  // valueKey={'code'}
                options={periods.map(t=>({value: t, label: t, key:"period"}))}                  
            />
              </div>
             
              {/* <div className="col">
              <button className="btn btn-primary">Connect</button>
              </div> */}

             
            </div>

          )}

          {message && (
            <div className="col-3">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
      <div className="row">
          
           <ShowTables state_tables={ele} tm = {key} username = {user} passwd = {password} dbname = {database} />      
           
    </div>
    
    <div>
      { 
      showschema && (<h3>showing schema</h3>)

      }
    </div>
           
    </div>

    
  );



};

export default Connection;