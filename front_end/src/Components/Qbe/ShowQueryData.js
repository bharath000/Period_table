import React, { useState, useEffect } from "react";
//import Input from "react-validation/build/input";
import QbeService from "../../Services/qbe.service";
import Form from "react-validation/build/form";


const ShowQueryData= (props) => {
    
    const col_names = props.tcolums_names;
    const col_values = props.tcolums_values;
    const col_condition = props.cond;
    const state_query = props.schema_state_q;
    const count_dict = props.count;

    const [qdata, setQdata] = useState("");
    const [trows, setTcols] = useState([]);
    const [q_rows, setQrows] = useState([]);

    const handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})

    }

    console.log(col_names,col_values,col_condition,state_query);

    const getData=( ) => {  
       
         QbeService.getQuerydb('root', '1234', 'qbe', col_condition, col_names, col_values).then(
        
            (tables_names) => {
                
                console.log(tables_names.data.data);
                setQdata(tables_names.data.data.Qbequery.querystr);
                setTcols(tables_names.data.data.Qbequery.tcols);
               //console.log(qdata.length);
               
            //    if(qdata){
            //     setQrows(qdata.tcols);
            //    setData(true);}
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

        

             
         }



    

if (state_query && col_values.length && col_names.length > 0){

    //getData();
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
    
        <div className = "card-container">
          
<h3>Show the query data schemas</h3>




<div className = "card-container">
<div class="table-responsive">
<table className = "table row2"  size="sm">
<tbody>
{qdata.tcols && trows.map((cols,i) =>(
                   <tr key={i}>
                       { cols.map((item, j)=>
                    
                         <td key={j}> {item} </td>)
                       }
                   </tr>
                ))
}

</tbody>
</table></div></div>
        </div>
        
        
        
        
        
        
        )


}
else{
    return (<h3>update the table state</h3>)
}


};

export default ShowQueryData;