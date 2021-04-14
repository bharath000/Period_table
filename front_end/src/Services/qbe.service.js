import axios from "axios";

const API_URL = "http://localhost:5000/periodictable/";

const getTabledb = (user, passwd, database) => {
    //console.log(API_URL + '?query={tables(user:"'+ user +'", passwd:"'+passwd+'" dbname:"'+database+'") {tname}}');
    return axios({
        //url: API_URL + '?query={tables(user:"'+ user +'", passwd:"'+passwd+'" dbname:"'+database+'") {tname}}',
        url: API_URL,
        method: 'post',
        data: {
            query: `
            query {tables(user: "`+ user +`", passwd:"`+passwd+`" dbname:"`+database+`") {tname tcoltype tcoloumns}}`
          }
      })
}

const getQuerydb = (user, passwd, database, condition, columns, values) => {
   // console.log(API_URL + '?query={tables(user:"'+ user +'", passwd:"'+passwd+'" dbname:"'+database+'" columns:"'+columns+'") {}}');
    return axios({
        //url: API_URL + '?query={tables(user:"'+ user +'", passwd:"'+passwd+'" dbname:"'+database+'") {tname}}',
        url: API_URL,
        method: 'post',
        data: {
            query: `
            query {Qbequery(user: "`+ user +`", passwd:"`+passwd+`" dbname:"`+database+`" condition:"`+condition+`" columns:"`+columns+`" values:"`+values+`" ) {querystr tcols}}`
          }
      })
}

const getStates =() =>{
          return  axios.get(API_URL+"standard_states/");
  }

const getClases =() =>{
    return  axios.get(API_URL+"classifications/");
}

const getBlocks =() =>{
    return  axios.get(API_URL+"blocks/");
}

const getPeriods =() =>{
    return  axios.get(API_URL+"periods/");
}

const getGroups =() =>{
    return  axios.get(API_URL+"groups/");
}

const getElements = (uri, id) =>{
    
    return axios.get(API_URL+uri+"/"+id);
   }

const getElementsProp = (id) =>{
    
    return axios.get(API_URL+"element/"+id);
   }

export default{
    getTabledb,
    getQuerydb,
    getStates,
    getBlocks,
    getClases,
    getGroups,
    getPeriods,
    getElements,
    getElementsProp
}