import React, { useState, useEffect } from "react";
//import Input from "react-validation/build/input";
import QbeService from "../../Services/qbe.service";
import Form from "react-validation/build/form";

import ShowQueryData from "./ShowQueryData";

const ShowSchemas= (props) => {
    const [statedata, setData] = useState(false)
    const tables = props.tblist;
    const schemastate = props.schema_state;
    const tb_sel = props.sel_tb;
    const count_dict = props.count;
    const [qdata, setQdata] = useState("");
    const [trows, setTcols] = useState([]);
    //const [column_names, setColoumn] = useState([]);
    //const [column_values, setValues] = useState([]);
    //const [condition, setCondition] = useState("");
    //const [qdata, setQdata] = useState([]);
    //console.log(props.username);
    const [q_rows, setQrows] = useState([]);

    const handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})

    }

   // console.log(tables,schemastate,tb_sel,count_dict);

    const Query= ( ) => {  
        var elements = document.querySelectorAll('#' + 'row1' + ' input');
        var column_names = [];
        var column_values = [];
        var condition = '';
        elements.forEach(e => {
            if (e.value !== '' && e.id !== 'condition_box'){
                    column_names.push(e.id);
                    column_values.push(e.value);
                    //document.getElementById(e.id).value = e.value; 
                   // console.log(document.getElementById(e.id).value);
            }
            if(e.value !== '' && e.id === 'condition_box'){
                    condition = condition+e.value;
                   // document.getElementById(e.id).value = e.value; 
            }
            //console.log(e.id + ': ' + e.value);
         }); 
        /// console.log(column_values);
        // console.log(column_names);
         //setData(true);
         if (column_names.length >0){

         QbeService.getQuerydb(props.username, props.passwd, props.dbname, condition, column_names, column_values).then(
        
            (tables_names) => {
                
                //console.log(tables_names.data.data.Qbequery.length);
                //setQdata(tables_names.data.data.Qbequery);
                if(tables_names.data.data.Qbequery.querystr !== null){
                setQdata(tables_names.data.data.Qbequery.querystr);}
                if(tables_names.data.data.Qbequery.tcols !== null){
                setTcols(tables_names.data.data.Qbequery.tcols);}
               //console.log(qdata.length);
               
               if(qdata){
                setQrows(qdata.tcols);
               setData(true);}
                    // if(qdata.length > 0){

                    // setData(true);}else{setData(false);}
               
                
            },
            (error) => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
            }
          );
        }else{setTcols([]);setQdata("");alert("Please Enter QBE Parameters")}

        //   var i = 0;
        //   column_names.forEach(e => {
              
            
        //             document.getElementById(e).value = column_values[i]; 
        //             i=i+1;
          
           
        //  }); 

             
         };

    const createTable = (tb_sel,count_dict) => {
        var Tables_code = [];
        for(var j= 0; j<tb_sel.length; j++){
            // table * times loop
        for (var k =0; k < count_dict[tb_sel[j].tname]; k++){
        // first row of the table
           var thisIsMyCopy = "<tr><td>"+tb_sel[j].tname+"_"+k+"</td>";
            for (var i = 0; i < tb_sel[j]['tcoltype'].length; i++){
    
                thisIsMyCopy = thisIsMyCopy+"<td>"+tb_sel[j]['tcoloumns'][i]+'('+tb_sel[j]['tcoltype'][i]+')'+"</td>";
    
            } 
            thisIsMyCopy = thisIsMyCopy + "</tr><tr><td>"+"<Input type='text'  className='form-control'id='"+tb_sel[j].tname+"_"+k+"'/></td>";
    
            for (var i = 0; i < tb_sel[j]['tcoltype'].length; i++){
                thisIsMyCopy = thisIsMyCopy+"<td><Input type='text'  className='form-control'id='"+tb_sel[j].tname+"_"+k+"."+tb_sel[j]['tcoloumns'][i]+"'/></td>";
            }
            thisIsMyCopy = thisIsMyCopy + "</tr>";
        // Second row of the table    
    
           // console.log(thisIsMyCopy);
            Tables_code.push(thisIsMyCopy)
    
        }
        
        }
        Tables_code.push("<tr><td>condition box</td></tr><tr><td><Input type='text' className='form-control'id='condition_box'/></td></tr>");
    
        //console.log(Tables_code[0]);
        return Tables_code

    }
    

if (schemastate && tables && tb_sel.length > 0){
    // var Tables_code = [];
    // for(var j= 0; j<tb_sel.length; j++){
    //     // table * times loop
    // for (var k =0; k < count_dict[tb_sel[j].tname]; k++){
    // // first row of the table
    //    var thisIsMyCopy = "<tr><td>"+tb_sel[j].tname+"_"+k+"</td>";
    //     for (var i = 0; i < tb_sel[j]['tcoltype'].length; i++){

    //         thisIsMyCopy = thisIsMyCopy+"<td>"+tb_sel[j]['tcoloumns'][i]+'('+tb_sel[j]['tcoltype'][i]+')'+"</td>";

    //     } 
    //     thisIsMyCopy = thisIsMyCopy + "</tr><tr><td>"+"<Input type='text'  className='form-control'id='"+tb_sel[j].tname+"_"+k+"'/></td>";

    //     for (var i = 0; i < tb_sel[j]['tcoltype'].length; i++){
    //         thisIsMyCopy = thisIsMyCopy+"<td><Input type='text'  className='form-control'id='"+tb_sel[j].tname+"_"+k+"."+tb_sel[j]['tcoloumns'][i]+"'/></td>";
    //     }
    //     thisIsMyCopy = thisIsMyCopy + "</tr>";
    // // Second row of the table    

    //     console.log(thisIsMyCopy);
    //     Tables_code.push(thisIsMyCopy)

    // }
    
    // }
    // Tables_code.push("<tr><td>condition box</td></tr><tr><td><Input type='text' className='form-control'id='condition_box'/></td></tr>");

    // console.log(Tables_code[0]);
    // for (var key of Object.keys(count_dict)){

    //     console.log(count_dict[key])
    //     var tag = document.createElement('table'); 
    //     tag.setAttribute('id', key);
    //        var ele =  document.getElementsById('row1');
    //         console.log(ele);
    //         ele.appendChild(tag);
    // }

    return(
    <div className = "row">
        
<div className="container">
<hr></hr>
           <div className = "row">
<h3>QBE Interface</h3> </div>
<table className = "table" className= "row1"id = 'row1' dangerouslySetInnerHTML={ {__html: createTable(tb_sel,count_dict)} } >

</table>
<div className = "row">
<button className="btn btn-primary" onClick={Query}>query</button>
</div>
</div>





        
        
        <div className = "container">
            <hr></hr>
            <div className = "row">
<h3>Query Results</h3> </div>
        <h5>{qdata}</h5>
        <table className = "table row2"  size="sm">
    
<tbody>
{trows && trows.map((cols,i) =>(
                   <tr key={i}>
                       { cols.map((item, j)=>
                    
                         <td key={j}> {item} </td>)
                       }
                   </tr>
                ))
}

</tbody>
</table>
        </div>
        </div>
        
        
        
        )


}
else{
    return (<h3>update the table state</h3>)
}


};

export default ShowSchemas;


/*<table className = "table" className= "row1"id = 'row1' dangerouslySetInnerHTML={ {__html: Tables_code} } >

</table> 
{ statedata && ( <ShowQueryData tcolums_names = {column_names} tcolums_values = {column_values} schema_state_q = {statedata}  cond = {condition} /> )

            } */